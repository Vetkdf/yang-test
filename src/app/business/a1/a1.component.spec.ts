import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A1Component } from './a1.component';

describe('A1Component', () => {
  let component: A1Component;
  let fixture: ComponentFixture<A1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
