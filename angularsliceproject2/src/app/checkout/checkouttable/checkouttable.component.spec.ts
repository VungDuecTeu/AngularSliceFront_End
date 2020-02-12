import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckouttableComponent } from './checkouttable.component';

describe('CheckouttableComponent', () => {
  let component: CheckouttableComponent;
  let fixture: ComponentFixture<CheckouttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckouttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckouttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
