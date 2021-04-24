import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const { foreCastUrl } = environment;

@Injectable({
    providedIn: 'root'
})

export class UrlConstants {
    foreCastVersion = '2.5';
    WEATHER_FORECAST_HOST_URL = foreCastUrl + 'data/' + this.foreCastVersion + '/weather';
}
