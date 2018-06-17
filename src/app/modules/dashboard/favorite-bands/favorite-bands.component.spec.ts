import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBandsComponent } from './favorite-bands.component';

describe('FavoriteBandsComponent', () => {
  let component: FavoriteBandsComponent;
  let fixture: ComponentFixture<FavoriteBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
