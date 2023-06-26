import { TestBed } from '@angular/core/testing';

import { RepositryService } from './repositry.service';

describe('RepositryService', () => {
  let service: RepositryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
