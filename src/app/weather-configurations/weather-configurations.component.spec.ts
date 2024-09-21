import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConfigurationsComponent as WeatherConfigurationsComponent } from './weather-configurations.component';

describe('WeatherConfigurationsCheckboxComponent', () => {
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
