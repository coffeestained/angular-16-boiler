import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationServiceLibraryComponent } from './localization-service-library.component';

describe('LocalizationServiceLibraryComponent', () => {
  let component: LocalizationServiceLibraryComponent;
  let fixture: ComponentFixture<LocalizationServiceLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalizationServiceLibraryComponent]
    });
    fixture = TestBed.createComponent(LocalizationServiceLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
