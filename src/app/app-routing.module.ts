import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherConfigurationsComponent } from './weather-configurations/weather-configurations.component';
import { WeatherWelcomeScreenComponent } from './weather-welcome-screen/weather-welcome-screen.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WeatherWelcomeScreenComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    component: WeatherViewComponent,
  },
  {
    path: 'configurations',
    component: WeatherConfigurationsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
