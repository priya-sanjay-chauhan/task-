import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserForm: FormGroup;

  constructor(private userData: UserdataService) {

    this.addUserForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    });
  }

  onSubmit(): void {
    const { name, email, address } = this.addUserForm.value;

    const newUser = {
      id: Date.now(), 
      name: name,
      email: email,
      address: {
        street: address,
        suite: '', 
        zipcode: '' 
      }
    };

    this.userData.addUser(newUser);
    this.addUserForm.reset();
  }
}
