import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3v7Component } from './m3v7.component';

describe('M3v7Component', () => {
  let component: M3v7Component;
  let fixture: ComponentFixture<M3v7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3v7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3v7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
