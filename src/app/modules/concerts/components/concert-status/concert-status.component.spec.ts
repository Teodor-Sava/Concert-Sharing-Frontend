import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertStatusComponent } from './concert-status.component';

describe('ConcertStatusComponent', () => {
  let component: ConcertStatusComponent;
  let fixture: ComponentFixture<ConcertStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
