import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersModule } from '../users/users.module';
import { AgGridModule } from 'ag-grid-angular';
import { CreateComponent } from './users/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    AdminComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UsersModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
