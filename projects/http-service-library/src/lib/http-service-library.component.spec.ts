import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceLibraryComponent } from './http-service-library.component';

describe('HttpServiceLibraryComponent', () => {
  let component: HttpServiceLibraryComponent;
  let fixture: ComponentFixture<HttpServiceLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpServiceLibraryComponent]
    });
    fixture = TestBed.createComponent(HttpServiceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
