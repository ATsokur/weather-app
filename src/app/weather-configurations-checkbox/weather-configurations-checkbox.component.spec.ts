import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConfigurationsCheckboxComponent } from './weather-configurations-checkbox.component';

describe('WeatherConfigurationsCheckboxComponent', () => {
  let component: WeatherConfigurationsCheckboxComponent;
  let fixture: ComponentFixture<WeatherConfigurationsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherConfigurationsCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherConfigurationsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
