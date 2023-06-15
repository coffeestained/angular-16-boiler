import { TestBed } from '@angular/core/testing';

import { WebSocketServiceLibraryService } from './web-socket-service-library.service';

describe('WebSocketServiceLibraryService', () => {
  let service: WebSocketServiceLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketServiceLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
