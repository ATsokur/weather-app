import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';
import { WeatherParams } from '../interfaces/weather-params';
import { City } from '../interfaces/city';

export const WEATHER_DEFAULT_PARAMS: WeatherParams = {
  latitude: '',
  longitude: '',
  timezone: 'auto',
  current: {
    temperature: 'temperature_2m',
    relative_humidity: 'relative_humidity_2m',
    apparent_temperature: 'apparent_temperature',
    is_day: 'is_day',
    wind_speed: 'wind_speed_10m',
  },
}

export class WEATHER_DEFAULT {
  constructor(latitude: string, longitude: string) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public latitude: string;
  public longitude: string;

  public getDefaultParams() {
    return {
      latitude: this.latitude,
      longitude: this.longitude,
      timezone: 'auto',
      current: {
        temperature: 'temperature_2m',
        relative_humidity: 'relative_humidity_2m',
        apparent_temperature: 'apparent_temperature',
        is_day: 'is_day',
        wind_speed: 'wind_speed_10m',
      },
    }
  }
}

export const CITIES: City[] = [
  {
    name: 'Краснодар',
    latitude: '45.0448',
    longitude: '38.976',
  },
  {
    name: 'Москва',
    latitude: '51.4111',
    longitude: '39.6028',
  },
  {
    name: 'Рим',
    latitude: '41.8919',
    longitude: '12.5113',
  },
  {
    name: 'Вашингтон',
    latitude: '38.8951',
    longitude: '-77.0364',
  },
  {
    name: 'Токио',
    latitude: '35.6895',
    longitude: '139.6917',
  },
  {
    name: 'Анкара',
    latitude: '39.9199',
    longitude: '32.8543',
  },
  {
    name: 'Мехико',
    latitude: '19.4285',
    longitude: '-99.1277',
  },
  {
    name: 'Минск',
    latitude: '53.9',
    longitude: '27.5667',
  },
  {
    name: 'Пхеньян',
    latitude: '39.0339',
    longitude: '125.7543',
  },
  {
    name: 'Пекин',
    latitude: '39.9075',
    longitude: '116.3972',
  },
]



@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private baseUrl: string = 'https://api.open-meteo.com/v1/forecast';
  public city: string = 'Краснодар';




  constructor(private http: HttpClient) { }


  getWeatherData(params: WeatherParams): Observable<Weather> {
    return this.http.get<Weather>(`${this.baseUrl}?latitude=${params.latitude}&longitude=${params.longitude}&current=${params.current.temperature},${params.current.relative_humidity},${params.current.apparent_temperature},${params.current.is_day},${params.current.wind_speed}&timezone=${params.timezone}`);
  }


}


