import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  {
    path: 'pickup',
    loadChildren: () => import('./pickup-arrangement/pickup-arrangement.module').then(m => m.PickupArrangementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
