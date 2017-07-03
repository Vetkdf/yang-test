import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2v2openComponent } from './m2v2open.component';

describe('M2v2openComponent', () => {
  let component: M2v2openComponent;
  let fixture: ComponentFixture<M2v2openComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2v2openComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2v2openComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
