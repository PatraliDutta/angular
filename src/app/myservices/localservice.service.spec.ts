import { TestBed, inject } from '@angular/core/testing';

import { LocalserviceService } from './localservice.service';

describe('LocalserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalserviceService]
    });
  });

  it('should be created', inject([LocalserviceService], (service: LocalserviceService) => {
    expect(service).toBeTruthy();
  }));
});
