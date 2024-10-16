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
    // Initialize the form with FormGroup
    this.addUserForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    });
  }

  // Handle form submission
  onSubmit(): void {
    const { name, email, address } = this.addUserForm.value;

    // Create a new user object
    const newUser = {
      id: Date.now(), // Dummy unique ID for new user
      name: name,
      email: email,
      address: {
        street: address, // Store the entire address as the street field
        suite: '', // Optionally add suite if needed
        zipcode: '' // Optionally add zipcode if needed
      }
    };

    // Add the new user through the UserdataService
    this.userData.addUser(newUser);

    // Optionally, reset the form after submission
    this.addUserForm.reset();
  }
}
