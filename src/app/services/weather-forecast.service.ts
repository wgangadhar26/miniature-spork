import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../utils/url-constants';
import { AppConstants } from '../AppConstants/app.constant';

@Injectable({
    providedIn: 'root'
})

export class WeatherForeCastService {
    private httpOptions = {};
    constructor(private _http: HttpClient, private urlConstants: UrlConstants) {

    }

    getDetails(cityName) {
        let queryParam = {};
        queryParam['q'] = cityName;
        queryParam['appid'] = AppConstants.appid;
        this.httpOptions['params'] = queryParam;
        return this._http.get<any>(this.urlConstants.WEATHER_FORECAST_HOST_URL, this.httpOptions);
    }
}
