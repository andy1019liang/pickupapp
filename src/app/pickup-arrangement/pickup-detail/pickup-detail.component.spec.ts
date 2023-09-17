import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupDetailComponent } from './pickup-detail.component';

describe('PickupDetailComponent', () => {
  let component: PickupDetailComponent;
  let fixture: ComponentFixture<PickupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
