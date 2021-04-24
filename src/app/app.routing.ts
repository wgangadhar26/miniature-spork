import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityWeatherForecastComponent } from './cityWeatherForecast/cityWeatherForecast.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cityWeatherForecast', component: CityWeatherForecastComponent }
];
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
      )
    ],
    exports: [
      RouterModule
    ],
    providers: []
  })
  export class AppRoutingModule { }