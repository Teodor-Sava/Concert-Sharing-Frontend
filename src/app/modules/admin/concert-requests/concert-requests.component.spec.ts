import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertRequestsComponent } from './concert-requests.component';

describe('ConcertRequestsComponent', () => {
  let component: ConcertRequestsComponent;
  let fixture: ComponentFixture<ConcertRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
