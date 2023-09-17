import { Component, EventEmitter, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.css']
})
export class DeleteBtnComponent implements ICellRendererAngularComp {

  @Output() onDelete = new EventEmitter();

  params: any;
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.params = params;

  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return true;
  }

  public delete() {
    this.params.onclick(this.params);
  }
}
