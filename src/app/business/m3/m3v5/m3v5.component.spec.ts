import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3v5Component } from './m3v5.component';

describe('M3v5Component', () => {
  let component: M3v5Component;
  let fixture: ComponentFixture<M3v5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3v5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3v5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
