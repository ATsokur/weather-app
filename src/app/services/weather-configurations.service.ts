import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherConfigurations } from '../interfaces/weather-configurations';
import { StorageService } from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class WeatherConfigurationsService {
   private storageService = inject(StorageService);

  public defaultWeatherConfiguration: WeatherConfigurations = {
    temperature: true,
    relative_humidity: false,
    apparent_temperature: false,
    is_day: false,
    wind_speed: false,
  }


  public weatherConfigSource$: BehaviorSubject<WeatherConfigurations> = new BehaviorSubject(
    this.storageService.isConfigAvailable() ? this.storageService.getUserSettings() : this.defaultWeatherConfiguration
  );

  constructor() { }

  changeConfiguration(weatherConfig: WeatherConfigurations) {
    this.weatherConfigSource$.next(weatherConfig);
  }
}



