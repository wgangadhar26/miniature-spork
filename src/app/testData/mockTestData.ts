import { Observable, of } from "rxjs"

export class MockWeatherForeCastService {
    static LondonData = {
        "coord": {
            "lon": -0.1257,
            "lat": 51.5085
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 275.29,
            "feels_like": 273.78,
            "temp_min": 273.71,
            "temp_max": 276.48,
            "pressure": 1029,
            "humidity": 93
        },
        "visibility": 10000,
        "wind": {
            "speed": 1.54,
            "deg": 10
        },
        "clouds": {
            "all": 5
        },
        "dt": 1619155439,
        "sys": {
            "type": 1,
            "id": 1414,
            "country": "GB",
            "sunrise": 1619153256,
            "sunset": 1619204979
        },
        "timezone": 3600,
        "id": 2643743,
        "name": "London",
        "cod": 200
    }
    static ManchesterData = {
        "coord": {
            "lon": -2.2374,
            "lat": 53.4809
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 276.9,
            "feels_like": 275.62,
            "temp_min": 276.15,
            "temp_max": 278.15,
            "pressure": 1029,
            "humidity": 75
        },
        "visibility": 10000,
        "wind": {
            "speed": 1.54,
            "deg": 90
        },
        "clouds": {
            "all": 8
        },
        "dt": 1619155081,
        "sys": {
            "type": 1,
            "id": 1379,
            "country": "GB",
            "sunrise": 1619153445,
            "sunset": 1619205803
        },
        "timezone": 3600,
        "id": 2643123,
        "name": "Manchester",
        "cod": 200
    }
    static OxfordData = {
        "coord": {
            "lon": -1.256,
            "lat": 51.7522
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 272.83,
            "feels_like": 272.83,
            "temp_min": 272.15,
            "temp_max": 273.15,
            "pressure": 1028,
            "humidity": 100
        },
        "visibility": 10000,
        "wind": {
            "speed": 0.51,
            "deg": 10
        },
        "clouds": {
            "all": 4
        },
        "dt": 1619155624,
        "sys": {
            "type": 1,
            "id": 1478,
            "country": "GB",
            "sunrise": 1619153489,
            "sunset": 1619205288
        },
        "timezone": 3600,
        "id": 2640729,
        "name": "Oxford",
        "cod": 200
    }
    static CambridgeData = {
        "coord": {
            "lon": -80.3127,
            "lat": 43.3601
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 272.99,
            "feels_like": 270.43,
            "temp_min": 272.04,
            "temp_max": 273.71,
            "pressure": 1016,
            "humidity": 69
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.06,
            "deg": 250
        },
        "clouds": {
            "all": 1
        },
        "dt": 1619155710,
        "sys": {
            "type": 1,
            "id": 836,
            "country": "CA",
            "sunrise": 1619173529,
            "sunset": 1619223191
        },
        "timezone": -14400,
        "id": 5913695,
        "name": "Cambridge",
        "cod": 200
    }
    static BristolData = {
        "coord": {
            "lon": -71.1662,
            "lat": 41.8334
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 276.14,
            "feels_like": 272.8,
            "temp_min": 275.37,
            "temp_max": 277.15,
            "pressure": 1011,
            "humidity": 41
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.6,
            "deg": 260,
            "gust": 7.72
        },
        "clouds": {
            "all": 1
        },
        "dt": 1619155710,
        "sys": {
            "type": 1,
            "id": 5995,
            "country": "US",
            "sunrise": 1619171499,
            "sunset": 1619220831
        },
        "timezone": -14400,
        "id": 4931378,
        "name": "Bristol",
        "cod": 200
    }

    static event = {
        target: {
            innerHTML: 'London'
        }
    }

    getDetails(cityName): Observable<any> {
        if (cityName === 'London') {
            return of(MockWeatherForeCastService.LondonData);
        } else if (cityName === 'Manchester') {
            return of(MockWeatherForeCastService.ManchesterData);
        } else if (cityName === 'Oxford') {
            return of(MockWeatherForeCastService.OxfordData);
        } else if (cityName === 'Cambridge') {
            return of(MockWeatherForeCastService.CambridgeData);
        } else {
            return of(MockWeatherForeCastService.BristolData);
        }
    }
}

export class MockActivatedRoute {
    queryParams = new Observable(observer => {
      const params = {
        val: 'London'
      }
      observer.next(params);
      observer.complete();
    });
  }