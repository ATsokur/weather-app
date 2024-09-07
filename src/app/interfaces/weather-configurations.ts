export interface WeatherConfigurations {
    temperature: boolean;
    relative_humidity: boolean;
    apparent_temperature: boolean;
    is_day: boolean;
    wind_speed: boolean;
    [key: string]: boolean;
}

export interface WeatherParamsMap {
  temperature: WeatherCardParams;
  relative_humidity: WeatherCardParams;
  apparent_temperature: WeatherCardParams;
  is_day: WeatherCardParams;
  wind_speed: WeatherCardParams;
}

export interface WeatherCardParams {
  title: string;
  icon: string;
  value: string;
}

