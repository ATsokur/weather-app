export interface Weather {
    latitude: number;
    longitude: number;
    timezone: string
    timezone_abbreviation: string;
    current_units:  {
      time: string;
      interval: string;
      temperature_2m: string;
      relative_humidity_2m: string;
      apparent_temperature: string;
      is_day: string;
      wind_speed_10m: string;
    }
    current: {
      time: string;
      interval: number;
      temperature_2m: number;
      relative_humidity_2m: number;
      apparent_temperature: number;
      is_day: number;
      wind_speed_10m: number;
    }
}

