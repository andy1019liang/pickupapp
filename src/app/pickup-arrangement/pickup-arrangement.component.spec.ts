import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupArrangementComponent } from './pickup-arrangement.component';

describe('PickupArrangementComponent', () => {
  let component: PickupArrangementComponent;
  let fixture: ComponentFixture<PickupArrangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupArrangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
