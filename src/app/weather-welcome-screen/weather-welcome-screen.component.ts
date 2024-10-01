import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-weather-welcome-screen',
  templateUrl: './weather-welcome-screen.component.html',
  styleUrl: './weather-welcome-screen.component.css'
})
export class WeatherWelcomeScreenComponent {
  public authenticationService = inject(AuthenticationService);
  public readonly userName: string = this.authenticationService.getUserName();
}
