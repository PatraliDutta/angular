import { TestBed, inject } from '@angular/core/testing';

import { RemoteserviceService } from './remoteservice.service';

describe('RemoteserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteserviceService]
    });
  });

  it('should be created', inject([RemoteserviceService], (service: RemoteserviceService) => {
    expect(service).toBeTruthy();
  }));
});
