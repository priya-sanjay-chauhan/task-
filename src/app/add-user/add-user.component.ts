import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Input() deletedUserIds: number[] = [];
  userForm: FormGroup;

  constructor(private userData: UserdataService) {
    // Initialize the form
    this.userForm = new FormGroup({
      id: new FormControl('', [Validators.required, this.idNotDeleted.bind(this)]),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl('', Validators.required)
      })
    });
  }

 
  idNotDeleted(control: FormControl): { [key: string]: boolean } | null {
    
    if (this.deletedUserIds.includes(control.value)) {
      console.log("id delete", );
      
      return { idDeleted: true }; 
    }
    return null; 
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;

      


 this.userData.addUser(newUser);

      console.log('User added:', newUser); 

      this.userForm.reset(); 
    } else {
      console.log('Form is invalid'); 
    }
  }
}
