import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';
import { WeatherForeCastService } from '../services/weather-forecast.service';
import { DashboardComponent } from './dashboard.component';
import { MockWeatherForeCastService } from '../testData/mockTestData';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

describe('DashboardComponent', () => {
    let mockRouter;
  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      imports: [FormsModule, AppRoutingModule, HttpClientModule,
        RouterModule],
      providers: [
        {provide: WeatherForeCastService, useClass: MockWeatherForeCastService},
        { provide: Router, useValue: mockRouter}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('city length is 5', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component.arrayOfCities.length).toEqual(5);
  });

  it('ngOnInit()', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'getCityDetails').and.callThrough();
    component.ngOnInit();
    expect(component.getCityDetails).toHaveBeenCalled();
  });
  
  it('ngOnDestroy()', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    component.subscription = new Subscription();
    spyOn(component.subscription, 'unsubscribe').and.callThrough();
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });

  it('should navigate', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    component.cityDetails(MockWeatherForeCastService.event);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/cityWeatherForecast'], { queryParams: { val: MockWeatherForeCastService.event.target.innerHTML }});
  });
});
