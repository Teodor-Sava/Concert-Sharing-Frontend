import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpaceRequestComponent } from './create-space-request.component';

describe('CreateSpaceRequestComponent', () => {
  let component: CreateSpaceRequestComponent;
  let fixture: ComponentFixture<CreateSpaceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpaceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpaceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
