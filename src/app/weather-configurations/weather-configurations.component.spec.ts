import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConfigurationsComponent } from './weather-configurations.component';

describe('WeatherConfigurationsComponent', () => {
  let component: WeatherConfigurationsComponent;
  let fixture: ComponentFixture<WeatherConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherConfigurationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
