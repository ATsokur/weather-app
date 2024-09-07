import { TestBed } from '@angular/core/testing';

import { WeatherConfigurationsService } from './weather-configurations.service';

describe('WeatherCinfigurationsService', () => {
  let service: WeatherConfigurationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherConfigurationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
