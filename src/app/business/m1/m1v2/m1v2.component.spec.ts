import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1v2Component } from './m1v2.component';

describe('M1v2Component', () => {
  let component: M1v2Component;
  let fixture: ComponentFixture<M1v2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1v2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
