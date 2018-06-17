import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandRequestsComponent } from './band-requests.component';

describe('BandRequestsComponent', () => {
  let component: BandRequestsComponent;
  let fixture: ComponentFixture<BandRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
