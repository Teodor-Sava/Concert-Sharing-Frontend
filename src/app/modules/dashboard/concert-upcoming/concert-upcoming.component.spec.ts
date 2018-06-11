import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertUpcomingComponent } from './concert-upcoming.component';

describe('ConcertUpcomingComponent', () => {
  let component: ConcertUpcomingComponent;
  let fixture: ComponentFixture<ConcertUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
