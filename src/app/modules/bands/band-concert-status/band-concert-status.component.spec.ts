import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandConcertStatusComponent } from './band-concert-status.component';

describe('BandConcertStatusComponent', () => {
  let component: BandConcertStatusComponent;
  let fixture: ComponentFixture<BandConcertStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandConcertStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandConcertStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
