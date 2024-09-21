import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WeatherConfigurationsService } from '../services/weather-configurations.service';
import { map, Subject, take, takeUntil, tap } from 'rxjs';
import { WeatherConfigurations } from '../interfaces/weather-configurations';
import { StorageService } from '../services/storage.service';
import { City } from '../interfaces/city';
import { CITIES } from '../services/weather-data.service';

@Component({
  selector: 'app-weather-configurations',
  templateUrl: 'weather-configurations.component.html',
  styleUrl: './weather-configurations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherConfigurationsComponent implements OnInit, OnDestroy {
  @Input() color: string = 'primary';
  private readonly fb = inject(FormBuilder);
  private readonly weatherConfigurationsService = inject(
    WeatherConfigurationsService
  );
  private storageService = inject(StorageService);
  public isEnabledSaveSettingsButton: boolean = true;
  public form: FormGroup;
  private destroyed$: Subject<void> = new Subject();
  private weatherConfig: WeatherConfigurations;
  public city: City = this.storageService.getUserSelectSettings()
    ? this.storageService.getUserSelectSettings()
    : (CITIES[0] as City);
  public cities: City[] = CITIES;
  public default: string = this.city.name;
  public cityForm: FormGroup;
  public cityControl: FormControl = new FormControl(null);
  private lastSavedValue: {
    weatherParams: WeatherConfigurations | null;
    cityId: string;
  };

  constructor() {}

  ngOnInit() {
    this.weatherConfigurationsService.weatherConfigSource$
      .pipe(
        take(1),
        tap((config) => {
          this.initForm(config);
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe((weatherConfig) => {
        this.weatherConfig = weatherConfig;
        this.lastSavedValue = {
          weatherParams: { ...this.weatherConfig },
          cityId: this.city.id,
        };
        this.isEnabledSaveSettingsButton = false;
      });

    this.initCityForm();
    this.initFormsListening();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  private isSameLastConfig(wConfig: WeatherConfigurations, cityId: string) {
    const newConfigParamsString = Object.keys(wConfig).map((key) => (wConfig[key] ? '1' : '0')).join('');
    const lastConfigParamsString = Object.keys(
      this.lastSavedValue.weatherParams as WeatherConfigurations
    ).map((key) =>(this.lastSavedValue.weatherParams as WeatherConfigurations)[key] ? '1' : '0').join('');
    return (
      newConfigParamsString === lastConfigParamsString &&
      cityId === this.lastSavedValue.cityId
    );
  }

  public initFormsListening() {
    this.form.valueChanges
      .pipe(
        map(() => this.form.getRawValue()),
        takeUntil(this.destroyed$)
      )
      .subscribe((value) => {
        this.isEnabledSaveSettingsButton = this.isSameLastConfig(
          value,
          this.city.id
        )
          ? false
          : true;
        this.weatherConfig = value;
      });

    this.cityForm.get('city')!.valueChanges.subscribe((e) => {
      this.cities.find((value) => {
        if (value.name === e) {
          this.city = value;
          this.isEnabledSaveSettingsButton = this.isSameLastConfig(
            this.form.getRawValue(),
            this.city.id
          )
            ? false
            : true;
        }
      });
    });
  }

  public initCityForm() {
    this.cityForm = new FormGroup({
      city: this.cityControl,
    });
    this.cityForm.controls['city']!.setValue(this.default, { onlySelf: true });
  }

  public initForm(formConfig: WeatherConfigurations) {
    this.form = this.fb.group(formConfig);
    this.form.controls['temperature']?.disable();
  }

  public toSaveSettings() {
    this.isEnabledSaveSettingsButton = false;
    this.storageService.setUserSelectSettings(this.city);
    this.storageService.setUserCheckboxSettings(this.weatherConfig);
    this.weatherConfigurationsService.changeConfiguration(this.weatherConfig);
    this.lastSavedValue = {
      weatherParams: { ...this.weatherConfig },
      cityId: this.city.id,
    };
  }
}
