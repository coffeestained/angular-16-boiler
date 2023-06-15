import { TestBed } from '@angular/core/testing';

import { HttpServiceLibraryService } from './http-service-library.service';

describe('HttpServiceLibraryService', () => {
  let service: HttpServiceLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
