import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WeatherConfigurationsService } from '../services/weather-configurations.service';
import { combineLatest, Observable, of, startWith, Subject, Subscription, switchMap, tap } from 'rxjs';
import { WeatherCardParams, WeatherConfigurations, WeatherParamsMap } from '../interfaces/weather-configurations';
import { City } from '../interfaces/city';
import { CITIES, WEATHER_DEFAULT, WEATHER_DEFAULT_PARAMS, WeatherDataService } from '../services/weather-data.service';
import { WeatherParams } from '../interfaces/weather-params';
import { Weather } from '../interfaces/weather';
import { StorageService } from '../services/storage.service';
import { FormControl, FormGroup } from '@angular/forms';
// import { FormControl, FormBuilder, Validators } from '@angular/forms';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrl: './weather-view.component.css'
})
export class WeatherViewComponent implements OnInit, OnDestroy {
  weatherConfig: WeatherConfigurations;
  weatherData: Weather;
  subscription: Subscription;
  cards: WeatherCardParams[] = [];
  private weatherConfigurationsService = inject(WeatherConfigurationsService);
  private weatherDataService = inject(WeatherDataService);
  private storageService = inject(StorageService);

  WEATHER_PARAMS_MAP:  WeatherParamsMap =  {
    temperature: {
      title: 'Температура',
      icon: '../assets/temperature.svg',
      value: '',
    },
    relative_humidity: {
      title: 'Относительная влажность',
      icon: '../assets/relative_humidity.svg',
      value: '',
    },
    apparent_temperature: {
      title: 'Ощущаемая температура',
      icon: '../assets/apparent_temperature.svg',
      value: '',
    },
    is_day: {
      title: 'Время суток',
      icon: '../assets/is_day.svg',
      value: '',
    },
    wind_speed: {
      title: 'Скорость ветра',
      icon: '../assets/wind_speed.svg',
      value: '',
    }
  }

  public city: City = this.storageService.getUserSelectSettings() ? this.storageService.getUserSelectSettings() : CITIES[0] as City;
  // public city: City = CITIES[0] as City;
  // public default: string = CITIES[0]!.name;
  public default: string = this.city.name;
  public cityForm: FormGroup;
  public cityControl: FormControl = new FormControl(null);
  // public cityControl = new FormControl(null);
     //  public city: City = CITIES[0] as City;
  public cities: City[] = CITIES;
  public weatherParams$: Subject<WeatherParams> = new Subject();
  public loading: boolean = false;

  // public cityForm = new FormGroup({
  //   city: this.cityControl,
  // });
  /* test */


  public weatherData$: Observable<Weather> = this.weatherParams$.pipe(
    startWith((new WEATHER_DEFAULT(this.city.latitude, this.city.longitude)).getDefaultParams()),
    switchMap((params) => {
      return this.weatherDataService.getWeatherData(params)
    })
  );


  updateParams() {
    const params: WeatherParams = {
      latitude: this.city.latitude,
      longitude: this.city.longitude,
      timezone: WEATHER_DEFAULT_PARAMS.timezone,
      current: {
        temperature: WEATHER_DEFAULT_PARAMS.current.temperature,
        relative_humidity: WEATHER_DEFAULT_PARAMS.current.relative_humidity,
        apparent_temperature: WEATHER_DEFAULT_PARAMS.current.apparent_temperature,
        is_day: WEATHER_DEFAULT_PARAMS.current.is_day,
        wind_speed: WEATHER_DEFAULT_PARAMS.current.wind_speed,
      },
    };
    this.weatherParams$.next(params);
  }

  constructor() {
    this.cityForm = new FormGroup({
      city: this.cityControl
    });
    this.cityForm.controls['city']!.setValue(this.default, {onlySelf: true});
    this.cityForm.get('city')!.valueChanges.subscribe((e) => {
      this.cities.find((value) => {
        if(value.name === e) {
          this.city = value;
          this.updateParams()
        }
      } )
    });
  }

  getCardValue(value: string, data: Weather) {
    let cardValue = '';
    switch(value) {
      case 'temperature': cardValue = data.current.temperature_2m + '';
      break;
      case 'relative_humidity': cardValue = data.current.relative_humidity_2m  + '';
      break;
      case 'apparent_temperature': cardValue = data.current.apparent_temperature  + '';
      break;
      case 'is_day': cardValue = data.current.is_day  + '';
      break;
      case 'wind_speed': cardValue = data.current.wind_speed_10m  + '';
      break;
    }

    return cardValue;
  }

  ngOnInit() {
    this.loading = true;
    console.log('city here!!!:', this.city);
    this.subscription = this.weatherConfigurationsService.weatherConfigSource$.pipe(
      switchMap((config) => {
        return combineLatest([of(config), this.weatherData$])
      }),
      tap(([config, data]) => {
        const cards = [];
        for (let key in config) {
          if(config[key]) {
            const card  = {
              title: this.WEATHER_PARAMS_MAP[key as keyof WeatherParamsMap].title,
              icon: this.WEATHER_PARAMS_MAP[key as keyof WeatherParamsMap].icon,
              value: this.getCardValue(key, data),
            }
            cards.push(card);
          }
        }

        this.cards = [...cards];
        console.log('cards: ', this.cards);
        this.loading = false;
      }),
    ).subscribe((weatherConfig) => {
      this.weatherConfig = weatherConfig[0];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}







