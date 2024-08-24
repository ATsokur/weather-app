import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-weather-configurations-checkbox',
  templateUrl: './weather-configurations-checkbox.component.html',
  styleUrl: './weather-configurations-checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherConfigurationsCheckboxComponent {
  private readonly _formBuilder = inject(FormBuilder);


  @Input() color: string = 'primary'


  readonly weatherConfig = this._formBuilder.group({
    temperature: true,
    relative_humidity: false,
    apparent_temperature: false,
    is_day: false,
    wind_speed: false
  });

}


