import { ChangeDetectionStrategy, Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherConfigurationsService } from '../services/weather-configurations.service'
import { map, Subject, take, takeUntil, tap } from 'rxjs';
import { WeatherConfigurations } from '../interfaces/weather-configurations';
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-weather-configurations-checkbox',
  templateUrl: './weather-configurations-checkbox.component.html',
  styleUrl: './weather-configurations-checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherConfigurationsCheckboxComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly weatherConfigurationsService = inject(WeatherConfigurationsService);
  private storageService = inject(StorageService);




  @Input() color: string = 'primary'


  public form: FormGroup;
  private destroyed$: Subject<void> = new Subject();


  weatherConfig: WeatherConfigurations;


  constructor() { }




  ngOnInit() {
    this.weatherConfigurationsService.weatherConfigSource$.pipe(
      take(1),
      tap((config) => {
        this.initForm(config);
      }),
      takeUntil(this.destroyed$),
    ).subscribe((weatherConfig) => {
      this.weatherConfig = weatherConfig;
      console.log('LocalStorage after refresh or init:', this.storageService.getUserSettings())
    });


    this.form.valueChanges.pipe(
      map(() => this.form.getRawValue()),
      takeUntil(this.destroyed$),
    ).subscribe((value) => {
      this.weatherConfigurationsService.changeConfiguration(value);
      this.storageService.setSettings(value);
      console.log('LocalStorage value here:', this.storageService.getUserSettings())
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  public initForm(formConfig: WeatherConfigurations) {
    this.form = this.fb.group(formConfig);
    this.form.controls['temperature']?.disable();
  }
}


