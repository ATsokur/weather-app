import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})

export class WeatherCardComponent {
  @Input() title: string;
  @Input() value: string;
  @Input() icon: string;
}

