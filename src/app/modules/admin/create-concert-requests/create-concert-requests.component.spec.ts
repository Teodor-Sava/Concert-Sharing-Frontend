import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConcertRequestsComponent } from './create-concert-requests.component';

describe('CreateConcertRequestsComponent', () => {
  let component: CreateConcertRequestsComponent;
  let fixture: ComponentFixture<CreateConcertRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConcertRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConcertRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
