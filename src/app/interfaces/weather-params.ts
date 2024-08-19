export interface WeatherParams {
  latitude: string;
  longitude: string;
  current: WeatherCurrentOptions;
  timezone: string;
}

export interface WeatherCurrentOptions {
  temperature: string;
  relative_humidity: string;
  apparent_temperature: string;
  is_day: string;
  wind_speed: string;
}


