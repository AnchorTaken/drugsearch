import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsingleComponent } from './drugsingle.component';

describe('DrugsingleComponent', () => {
  let component: DrugsingleComponent;
  let fixture: ComponentFixture<DrugsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
