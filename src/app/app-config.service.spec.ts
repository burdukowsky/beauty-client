import {TestBed, inject} from '@angular/core/testing';

import {AppConfig} from './app-config.service';

describe('AppConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfig]
    });
  });

  it('should be created', inject([AppConfig], (service: AppConfig) => {
    expect(service).toBeTruthy();
  }));
});
