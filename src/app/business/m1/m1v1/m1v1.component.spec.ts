import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1v1Component } from './m1v1.component';

describe('M1v1Component', () => {
  let component: M1v1Component;
  let fixture: ComponentFixture<M1v1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1v1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1v1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
