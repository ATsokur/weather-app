import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherConfigurations } from '../interfaces/weather-configurations';


@Injectable({
  providedIn: 'root'
})
export class WeatherConfigurationsService {
  public defaultWeatherConfiguration: WeatherConfigurations = {
    temperature: true,
    relative_humidity: false,
    apparent_temperature: false,
    is_day: false,
    wind_speed: false
  }

  public weatherConfigSource: BehaviorSubject<WeatherConfigurations> = new BehaviorSubject(this.defaultWeatherConfiguration);


  constructor() { }

  changeConfiguration(weatherConfig: WeatherConfigurations) {
    this.weatherConfigSource.next(weatherConfig)
  }
}



