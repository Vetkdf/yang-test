import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2v1Component } from './m2v1.component';

describe('M2v1Component', () => {
  let component: M2v1Component;
  let fixture: ComponentFixture<M2v1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2v1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2v1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
