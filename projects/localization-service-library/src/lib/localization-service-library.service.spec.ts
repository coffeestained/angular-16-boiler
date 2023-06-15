import { TestBed } from '@angular/core/testing';

import { LocalizationServiceLibraryService } from './localization-service-library.service';

describe('LocalizationServiceLibraryService', () => {
  let service: LocalizationServiceLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizationServiceLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
