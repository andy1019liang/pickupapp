import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickupArrangementComponent } from './pickup-arrangement.component';
import { PickupDetailComponent } from './pickup-detail/pickup-detail.component';

const routes: Routes = [
    { path: '', component: PickupArrangementComponent },
    { path: 'detail', component: PickupDetailComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickupArrangementRoutingModule { }
