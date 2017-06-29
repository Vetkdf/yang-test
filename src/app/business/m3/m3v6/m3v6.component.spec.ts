import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3v6Component } from './m3v6.component';

describe('M3v6Component', () => {
  let component: M3v6Component;
  let fixture: ComponentFixture<M3v6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3v6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3v6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
