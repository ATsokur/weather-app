import { Component } from '@angular/core';
import { WEATHER_DEFAULT_PARAMS, WeatherDataService } from '../services/weather-data.service';
import { Weather } from '../interfaces/weather';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { WeatherParams } from '../interfaces/weather-params';



@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
  public weatherParams$: Subject<WeatherParams> = new Subject();
  public weatherData$: Observable<Weather> = this.weatherParams$.pipe(
    startWith(WEATHER_DEFAULT_PARAMS),
    switchMap((params) => {
      return this.weatherDataService.getWeatherData(params)
    })
  );

  public weatherData: Weather;

  constructor(private weatherDataService: WeatherDataService) {
  }

  updateParams() {
    const params: WeatherParams = {
      latitude: '',
      longitude: '',
      current: {
        temperature: WEATHER_DEFAULT_PARAMS.current.temperature
      },
      timezone: WEATHER_DEFAULT_PARAMS.timezone
    };
    this.weatherParams$.next(params);
  }
}
