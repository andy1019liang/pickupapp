import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersModule
  ]
})
export class DashboardModule { }
