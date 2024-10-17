import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserForm: FormGroup;
  idError: string = '';  

  constructor(private userDataService: UserdataService, private dashboard: DashboardComponent) {
   
    this.addUserForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required)
    });
  }


  onSubmit(): void {
    const { id, name, email, address } = this.addUserForm.value;
    const newId = Number(id); 

    const existingUserIds = this.dashboard.existingUserIds;
    const deletedUserIds = this.dashboard.deletedUserIds;

 
    if (existingUserIds.includes(newId) || deletedUserIds.includes(newId)) {
      this.idError = 'ID already exists or was deleted';
    } else {
      this.idError = ''; 

      const newUser = {
        id: newId,
        name: name,
        email: email,
        address: {
          street: address,
          suite: '',
          zipcode: ''
        }
      };

      
      this.userDataService.addUser(newUser);
      this.dashboard.existingUserIds.push(newId);

      this.addUserForm.reset();
    }
  }
}
