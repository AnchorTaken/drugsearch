import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillLibraryComponent } from './pill-library.component';

describe('PillLibraryComponent', () => {
  let component: PillLibraryComponent;
  let fixture: ComponentFixture<PillLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
