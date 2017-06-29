import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2v4Component } from './m2v4.component';

describe('M2v4Component', () => {
  let component: M2v4Component;
  let fixture: ComponentFixture<M2v4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2v4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2v4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
