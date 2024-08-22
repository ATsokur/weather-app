import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWelcomeScreenComponent } from './weather-welcome-screen.component';

describe('WeatherWelcomeScreenComponent', () => {
  let component: WeatherWelcomeScreenComponent;
  let fixture: ComponentFixture<WeatherWelcomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherWelcomeScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
