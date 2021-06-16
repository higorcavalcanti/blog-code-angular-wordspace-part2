import { TestBed } from '@angular/core/testing';

import { LibNameService } from './lib-name.service';

describe('LibNameService', () => {
  let service: LibNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
