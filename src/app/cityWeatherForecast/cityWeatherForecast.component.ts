import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CityDetailsBristol, CityDetailsCambridge, CityDetailsLondon, CityDetailsManchester, CityDetailsOxford } from '../models/cityDetails';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './cityWeatherForecast.component.html'
})
export class CityWeatherForecastComponent implements OnInit, OnDestroy {
  CityName;
  Temperature;
  SeaLevel;
  subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private cityDetailsLondon: CityDetailsLondon,
    public cityDetailsManchester: CityDetailsManchester, public cityDetailsCambridge: CityDetailsCambridge,
    public cityDetailsOxford: CityDetailsOxford, public cityDetailsBristol: CityDetailsBristol) {

  }

  ngOnInit() {
    this.getDetailsofSepcificCity();
  }

  getDetailsofSepcificCity() {
    /* Here I'm not making any API call to get hte details, rather I'm taking from the intial variables */
    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      const cityName = params['val'];
      console.log(cityName);
      if (cityName === 'London') {
        this.CityName = this.cityDetailsLondon.CityName;
        this.Temperature = this.cityDetailsLondon.Temperature;
        this.SeaLevel = this.cityDetailsLondon.SeaLevel; // Since I didn't find any API returning the sealevel of 5 days I have rendered the pressure property from response according to the documentation
      } else if (cityName === 'Manchester') {
        this.CityName = this.cityDetailsManchester.CityName;
        this.Temperature = this.cityDetailsManchester.Temperature;
        this.SeaLevel = this.cityDetailsManchester.SeaLevel;
      } else if (cityName === 'Cambridge') {
        this.CityName = this.cityDetailsCambridge.CityName;
        this.Temperature = this.cityDetailsCambridge.Temperature;
        this.SeaLevel = this.cityDetailsCambridge.SeaLevel;
      } else if (cityName === 'Oxford') {
        this.CityName = this.cityDetailsOxford.CityName;
        this.Temperature = this.cityDetailsOxford.Temperature;
        this.SeaLevel = this.cityDetailsOxford.SeaLevel;
      } else if (cityName === 'Bristol') {
        this.CityName = this.cityDetailsBristol.CityName;
        this.Temperature = this.cityDetailsBristol.Temperature;
        this.SeaLevel = this.cityDetailsBristol.SeaLevel;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}