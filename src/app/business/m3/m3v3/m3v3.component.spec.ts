import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3v3Component } from './m3v3.component';

describe('M3v3Component', () => {
  let component: M3v3Component;
  let fixture: ComponentFixture<M3v3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3v3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
