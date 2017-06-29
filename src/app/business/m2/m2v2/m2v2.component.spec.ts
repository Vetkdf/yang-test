import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2v2Component } from './m2v2.component';

describe('M2v2Component', () => {
  let component: M2v2Component;
  let fixture: ComponentFixture<M2v2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2v2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
