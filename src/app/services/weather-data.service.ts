import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';
import { WeatherParams } from '../interfaces/weather-params';

export const WEATHER_DEFAULT_PARAMS: WeatherParams = {
  latitude: '45.0448',
  longitude: '38.976',
  current: {
    temperature: 'temperature_2m'
  },
  timezone: 'auto'
}

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private baseUrl: string = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) { }

  getWeatherData(params: WeatherParams): Observable<Weather> {
    return this.http.get<Weather>(`${this.baseUrl}?latitude=${params.latitude}&longitude=${params.longitude}&current=${params.current.temperature}&timezone=${params.timezone}`);
  }

}


