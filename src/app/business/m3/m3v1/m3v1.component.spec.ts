import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3v1Component } from './m3v1.component';

describe('M3v1Component', () => {
  let component: M3v1Component;
  let fixture: ComponentFixture<M3v1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3v1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3v1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
