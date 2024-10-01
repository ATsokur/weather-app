import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherConfigurationsComponent } from './weather-configurations/weather-configurations.component';
import { WeatherWelcomeScreenComponent } from './weather-welcome-screen/weather-welcome-screen.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'welcome',
    component: WeatherWelcomeScreenComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    component: WeatherViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'configurations',
    component: WeatherConfigurationsComponent,
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
