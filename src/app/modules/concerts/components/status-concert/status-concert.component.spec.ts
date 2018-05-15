import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusConcertComponent } from './status-concert.component';

describe('StatusConcertComponent', () => {
  let component: StatusConcertComponent;
  let fixture: ComponentFixture<StatusConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
