import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsDetailsComponent } from './bands-details.component';

describe('BandsDetailsComponent', () => {
  let component: BandsDetailsComponent;
  let fixture: ComponentFixture<BandsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
