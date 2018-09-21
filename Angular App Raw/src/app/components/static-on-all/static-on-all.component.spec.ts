import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticOnAllComponent } from './static-on-all.component';

describe('StaticOnAllComponent', () => {
  let component: StaticOnAllComponent;
  let fixture: ComponentFixture<StaticOnAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticOnAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticOnAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
