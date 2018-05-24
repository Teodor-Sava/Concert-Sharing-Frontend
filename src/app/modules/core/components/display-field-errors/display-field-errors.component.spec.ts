import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFieldErrorsComponent } from './display-field-errors.component';

describe('DisplayFieldErrorsComponent', () => {
  let component: DisplayFieldErrorsComponent;
  let fixture: ComponentFixture<DisplayFieldErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFieldErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFieldErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
