import { Component,  OnInit, OnDestroy } from '@angular/core';
import { WeatherConfigurationsService } from '../services/weather-configurations.service';
import { Subscription } from 'rxjs';
import { WeatherConfigurations } from '../interfaces/weather-configurations';



@Component({
  selector: 'app-weather-configurations',
  templateUrl: './weather-configurations.component.html',
  styleUrl: './weather-configurations.component.css'
})
export class WeatherConfigurationsComponent implements OnInit, OnDestroy {
  weatherConfig: WeatherConfigurations;
  subscription: Subscription;

  constructor(private weatherConfigurationsService: WeatherConfigurationsService) { }

  ngOnInit() {
    this.subscription = this.weatherConfigurationsService.weatherConfigSource.subscribe(weatherConfig => this.weatherConfig = weatherConfig)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
