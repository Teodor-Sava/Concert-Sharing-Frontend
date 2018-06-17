import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertAllComponent } from './concert-all.component';

describe('ConcertAllComponent', () => {
  let component: ConcertAllComponent;
  let fixture: ComponentFixture<ConcertAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
