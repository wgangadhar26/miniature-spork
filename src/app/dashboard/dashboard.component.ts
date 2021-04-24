import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppConstants } from '../AppConstants/app.constant';
import { CityDetailsLondon } from '../models/cityDetails';
import { CityDetailsManchester } from '../models/cityDetails';
import { CityDetailsCambridge } from '../models/cityDetails';
import { CityDetailsOxford } from '../models/cityDetails';
import { CityDetailsBristol } from '../models/cityDetails';
import { WeatherForeCastService } from '../services/weather-forecast.service';
import { Cities } from '../AppConstants/mockInputData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  arrayOfCities = Cities;
  subscription: Subscription;
  constructor(private weatherforecastService: WeatherForeCastService, public cityDetailsLondon: CityDetailsLondon,
    public cityDetailsManchester: CityDetailsManchester, public cityDetailsCambridge: CityDetailsCambridge,
    public cityDetailsOxford: CityDetailsOxford, public cityDetailsBristol: CityDetailsBristol, private router: Router) {

  }

  ngOnInit() {
    this.arrayOfCities.forEach((city) => {
      this.getCityDetails(city);
    });
  }

  getCityDetails(city) {
    /* Since I didn't get any API which returns the details of all the cities, I went with the fetchidng details for every individual city */
    this.subscription = this.weatherforecastService.getDetails(city.CityName).subscribe(response => {
      if (city.CityName === 'London') {
        this.cityDetailsLondon.Id = city.Id;
        this.cityDetailsLondon.CityName = city.CityName;
        this.cityDetailsLondon.Temperature = (response.main.temp - AppConstants.KelvinToCelciusConstant).toFixed(2);
        this.cityDetailsLondon.SunriseTime = new Date(response.sys.sunrise * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsLondon.SunSetTime = new Date(response.sys.sunset * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsLondon.SeaLevel = response.main.pressure; // Since I didn't find any API returning the sealevel of 5 days I have rendered the pressure property from response according to the documentation
        console.log(response, this.cityDetailsLondon.SunriseTime, this.cityDetailsLondon.SunSetTime);
      } else if (city.CityName === 'Manchester') {
        this.cityDetailsManchester.Id = city.Id;
        this.cityDetailsManchester.CityName = city.CityName;
        this.cityDetailsManchester.Temperature = (response.main.temp - AppConstants.KelvinToCelciusConstant).toFixed(2);
        this.cityDetailsManchester.SunriseTime = new Date(response.sys.sunrise * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsManchester.SunSetTime = new Date(response.sys.sunset * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsManchester.SeaLevel = response.main.pressure;
        console.log(response, this.cityDetailsManchester.SunriseTime, this.cityDetailsManchester.SunSetTime);
      } else if (city.CityName === 'Cambridge') {
        this.cityDetailsCambridge.Id = city.Id;
        this.cityDetailsCambridge.CityName = city.CityName;
        this.cityDetailsCambridge.Temperature = (response.main.temp - AppConstants.KelvinToCelciusConstant).toFixed(2);
        this.cityDetailsCambridge.SunriseTime = new Date(response.sys.sunrise * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsCambridge.SunSetTime = new Date(response.sys.sunset * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsCambridge.SeaLevel = response.main.pressure;
        console.log(response, this.cityDetailsCambridge.SunriseTime, this.cityDetailsCambridge.SunSetTime);
      } else if (city.CityName === 'Oxford') {
        this.cityDetailsOxford.Id = city.Id;
        this.cityDetailsOxford.CityName = city.CityName;
        this.cityDetailsOxford.Temperature = (response.main.temp - AppConstants.KelvinToCelciusConstant).toFixed(2);
        this.cityDetailsOxford.SunriseTime = new Date(response.sys.sunrise * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsOxford.SunSetTime = new Date(response.sys.sunset * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsOxford.SeaLevel = response.main.pressure;
        console.log(response, this.cityDetailsOxford.SunriseTime, this.cityDetailsOxford.SunSetTime);
      } else if (city.CityName === 'Bristol') {
        this.cityDetailsBristol.Id = city.Id;
        this.cityDetailsBristol.CityName = city.CityName;
        this.cityDetailsBristol.Temperature = (response.main.temp - AppConstants.KelvinToCelciusConstant).toFixed(2);
        this.cityDetailsBristol.SunriseTime = new Date(response.sys.sunrise * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsBristol.SunSetTime = new Date(response.sys.sunset * AppConstants.UnixTimeConvertor).toLocaleTimeString();
        this.cityDetailsBristol.SeaLevel = response.main.pressure;
        console.log(response, this.cityDetailsBristol.SunriseTime, this.cityDetailsBristol.SunSetTime);
      }
    }, err => {
      console.log("Error", err);
    });
  }

  cityDetails($event) {
    this.router.navigate(['/cityWeatherForecast'], { queryParams: { val: $event.target.innerHTML }});
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}