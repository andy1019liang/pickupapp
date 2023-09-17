import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, NewValueParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { map,  } from 'rxjs/operators';
import { DeleteBtnComponent } from 'src/app/aggrid/components/delete-btn/delete-btn.component';
import { UserDisplay } from 'src/app/shared/models/userDisplay';
import { User } from 'src/app/users/models/user';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //users$: Observable<User[]>;
  constructor(private userService: UsersService) {
    //his.users$ = this.userService.getUsers();
  }

  public columnDefs: ColDef[] = [
    {
      field: 'id',
      hide: true
    },
    { 
      field: 'firstName',
      editable: true
    },
    { field: 'lastName',
      editable: true
    },
    { 
      field: 'phone',
      editable: true,
      onCellValueChanged: (event) => this.changePhoneNumber(event)
    },
    { 
      field: 'address',
      editable: false
    },
    { 
      field: 'role' 
    },
    {
      headerName: '', field: 'fieldName',
      cellRenderer: DeleteBtnComponent,
      cellRendererParams: {
        onclick: (param: any) => this.delete(param.data)
      }
    }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<UserDisplay[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;


  ngOnInit(): void {
    
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.userService.getUsers().pipe(
      map((users) => {
        return users.map(u => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            phone: u.phone?.number,
            address: u.address?.address1 + " " + u.address?.address2 + " " + u.address?.city + " " + u.address?.state + " " + u.address?.zipCode,
            role: u.roles.map(r => r.name).join(", ")
          } as UserDisplay
        })
      })
    );
  }

  changePhoneNumber(event: NewValueParams) {
    const userId = event.data.id;
    const phoneNumber = event.data.phone;
    this.userService.updateUserPhoneNumber(userId, phoneNumber).subscribe(result => {
      console.log(result);
    })
  }

  delete(data: any) {
    console.log('delete', data)
    this.userService.deleteUser(data.id).subscribe((result) => {
      console.log(result);
    })
  }
}