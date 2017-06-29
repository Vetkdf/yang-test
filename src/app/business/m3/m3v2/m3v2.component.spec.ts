import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3v2Component } from './m3v2.component';

describe('M3v2Component', () => {
  let component: M3v2Component;
  let fixture: ComponentFixture<M3v2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3v2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
