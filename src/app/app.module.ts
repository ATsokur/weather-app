import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WeatherConfigurationsComponent } from './weather-configurations/weather-configurations.component';
import { WeatherWelcomeScreenComponent } from './weather-welcome-screen/weather-welcome-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherConfigurationsComponent,
    WeatherWelcomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
