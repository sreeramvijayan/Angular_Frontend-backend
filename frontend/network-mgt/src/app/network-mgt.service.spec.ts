import { TestBed } from '@angular/core/testing';

import { NetworkMgtService } from './network-mgt.service';

describe('NetworkMgtService', () => {
  let service: NetworkMgtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkMgtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
