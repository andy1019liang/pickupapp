import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from 'src/app/users/models/role';
import { User } from 'src/app/users/models/user';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    role: new FormControl('')
  })

  constructor(private userService: UsersService) {}
  ngOnInit(): void {
   
  }

  onSubmit() {
    console.log(this.userForm)
    const newUser = {
      firstName: this.userForm.get('firstName')?.value ?? '',
      lastName: this.userForm.get('lastName')?.value ?? '',
      phone: {
        number: this.userForm.get('phoneNumber')?.value ?? ''
      },
      address: {
        address1: this.userForm.get('address1')?.value ?? '',
        address2: this.userForm.get('address2')?.value ?? '',
        city: this.userForm.get('city')?.value ?? '',
        state: this.userForm.get('state')?.value ?? '',
        zipCode: this.userForm.get('zipCode')?.value ?? '',
      },
      roles: [
        {
          id: Number(this.userForm.get('role')?.value)
        } as Role
      ]
    } as User;

    this.userService.createUser(newUser).subscribe(result => {
      console.log('result', result);
    })

  }
}
