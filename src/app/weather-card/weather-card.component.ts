import { Component } from '@angular/core';
import { CITIES, WEATHER_DEFAULT, WEATHER_DEFAULT_PARAMS, WeatherDataService } from '../services/weather-data.service';
import { Weather } from '../interfaces/weather';
import { Observable, startWith, Subject, switchMap, tap, } from 'rxjs';
import { WeatherParams } from '../interfaces/weather-params';
import { City } from '../interfaces/city';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  public city: City = CITIES[0] as City;
  public cities: City[] = CITIES;

  public weatherParams$: Subject<WeatherParams> = new Subject();
  public weatherData$: Observable<Weather> = this.weatherParams$.pipe(
    startWith((new WEATHER_DEFAULT(this.city.latitude, this.city.longitude)).getDefaultParams()),
    tap((r) => {
      console.log('params are: ', r);
    }),
    switchMap((params) => {
      return this.weatherDataService.getWeatherData(params)
    })
  );




  constructor(private weatherDataService: WeatherDataService) {
  }

  updateParams() {
    const params: WeatherParams = {
      latitude: this.city.latitude, // ''
      longitude: this.city.longitude, // ''
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

}
