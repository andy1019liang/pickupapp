import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupArrangementComponent } from './pickup-arrangement.component';
import { PickupDetailComponent } from './pickup-detail/pickup-detail.component';
import { PickupArrangementRoutingModule } from './pickup-arrangement-routing.module';



@NgModule({
  declarations: [
    PickupArrangementComponent,
    PickupDetailComponent
  ],
  imports: [
    CommonModule,
    PickupArrangementRoutingModule
  ]
})
export class PickupArrangementModule { }
