export interface WeatherParams {
  latitude: string;
  longitude: string;
  current: WeatherCurrentOptions;
  timezone: string;
}

export interface WeatherCurrentOptions {
  temperature: string;
}
