import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesDetailsComponent } from './spaces-details.component';

describe('SpacesDetailsComponent', () => {
  let component: SpacesDetailsComponent;
  let fixture: ComponentFixture<SpacesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
