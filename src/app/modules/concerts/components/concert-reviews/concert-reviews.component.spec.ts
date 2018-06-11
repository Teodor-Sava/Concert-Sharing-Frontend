import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertReviewsComponent } from './concert-reviews.component';

describe('ConcertReviewsComponent', () => {
  let component: ConcertReviewsComponent;
  let fixture: ComponentFixture<ConcertReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
