import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3v4Component } from './m3v4.component';

describe('M3v4Component', () => {
  let component: M3v4Component;
  let fixture: ComponentFixture<M3v4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3v4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3v4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
