import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoforComponent } from './forofor.component';

describe('ForoforComponent', () => {
  let component: ForoforComponent;
  let fixture: ComponentFixture<ForoforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
