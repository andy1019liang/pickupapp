import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DeleteBtnComponent } from './aggrid/components/delete-btn/delete-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
