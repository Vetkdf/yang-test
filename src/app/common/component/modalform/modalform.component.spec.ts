import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalformComponent } from './modalform.component';

describe('ModalformComponent', () => {
  let component: ModalformComponent;
  let fixture: ComponentFixture<ModalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
