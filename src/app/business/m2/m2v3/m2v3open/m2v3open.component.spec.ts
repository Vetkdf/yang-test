import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2v3openComponent } from './m2v3open.component';

describe('M2v3openComponent', () => {
  let component: M2v3openComponent;
  let fixture: ComponentFixture<M2v3openComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2v3openComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2v3openComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
