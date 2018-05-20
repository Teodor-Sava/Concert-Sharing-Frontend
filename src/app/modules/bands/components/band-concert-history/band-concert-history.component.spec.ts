import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandConcertHistoryComponent } from './band-concert-history.component';

describe('BandConcertHistoryComponent', () => {
  let component: BandConcertHistoryComponent;
  let fixture: ComponentFixture<BandConcertHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandConcertHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandConcertHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
