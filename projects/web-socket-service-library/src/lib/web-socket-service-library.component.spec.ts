import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketServiceLibraryComponent } from './web-socket-service-library.component';

describe('WebSocketServiceLibraryComponent', () => {
  let component: WebSocketServiceLibraryComponent;
  let fixture: ComponentFixture<WebSocketServiceLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebSocketServiceLibraryComponent]
    });
    fixture = TestBed.createComponent(WebSocketServiceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
