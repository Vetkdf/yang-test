import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2v3Component } from './m2v3.component';

describe('M2v3Component', () => {
  let component: M2v3Component;
  let fixture: ComponentFixture<M2v3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2v3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
