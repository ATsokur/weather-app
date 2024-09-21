import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WeatherConfigurationsComponent } from './weather-configurations/weather-configurations.component';
import { WeatherWelcomeScreenComponent } from './weather-welcome-screen/weather-welcome-screen.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { LoadingComponent } from './loading/loading.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { SelectComponent } from './select/select.component';






@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherConfigurationsComponent,
    WeatherWelcomeScreenComponent,
    WeatherViewComponent,
    LoadingComponent,
    ToggleButtonComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
