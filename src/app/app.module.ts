import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
