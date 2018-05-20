import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandConcertRequestsComponent } from './band-concert-requests.component';

describe('BandConcertRequestsComponent', () => {
  let component: BandConcertRequestsComponent;
  let fixture: ComponentFixture<BandConcertRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandConcertRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandConcertRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
