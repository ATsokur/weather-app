import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';
import { WeatherParams } from '../interfaces/weather-params';

export const WEATHER_DEFAULT_PARAMS: WeatherParams = {
  latitude: '45.0448',
  longitude: '38.976',
  timezone: 'auto',
  current: {
    temperature: 'temperature_2m',
    relative_humidity: 'relative_humidity_2m',
    apparent_temperature: 'apparent_temperature',
    is_day: 'is_day',
    wind_speed: 'wind_speed_10m',
  },
}



@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private baseUrl: string = 'https://api.open-meteo.com/v1/forecast';


  constructor(private http: HttpClient) { }

  getWeatherData(params: WeatherParams): Observable<Weather> {
    return this.http.get<Weather>(`${this.baseUrl}?latitude=${params.latitude}&longitude=${params.longitude}&current=${params.current.temperature},${params.current.relative_humidity},${params.current.apparent_temperature},${params.current.is_day},${params.current.wind_speed}&timezone=${params.timezone}`);
  }

}


