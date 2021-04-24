import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRoutingModule } from '../app.routing';
import { MockActivatedRoute } from '../testData/mockTestData';
import { CityWeatherForecastComponent } from './cityWeatherForecast.component';

describe('CityWeatherForecastComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CityWeatherForecastComponent
      ],
      imports: [FormsModule, AppRoutingModule],
      providers: [
        { 
          provide: ActivatedRoute, 
          useClass: MockActivatedRoute
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CityWeatherForecastComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('ngOnInit()', () => {
    const fixture = TestBed.createComponent(CityWeatherForecastComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'getDetailsofSepcificCity').and.callThrough();
    component.ngOnInit();
    expect(component.getDetailsofSepcificCity).toHaveBeenCalled();
  });

  it('ngOnDestroy()', () => {
    const fixture = TestBed.createComponent(CityWeatherForecastComponent);
    const component = fixture.componentInstance;
    component.subscription = new Subscription();
    spyOn(component.subscription, 'unsubscribe').and.callThrough();
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });
});
