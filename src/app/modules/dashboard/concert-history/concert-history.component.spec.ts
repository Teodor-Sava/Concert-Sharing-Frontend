import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertHistoryComponent } from './concert-history.component';

describe('ConcertHistoryComponent', () => {
  let component: ConcertHistoryComponent;
  let fixture: ComponentFixture<ConcertHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
