import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginForm: FormGroup;
  error:string=''

  dummy_user="admin"
  dummy_password="123"


  constructor(private router: Router, private loginService:AuthService ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]), 
      password: new FormControl('', [Validators.required]), 
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // console.log('Username:', username);
      // console.log('Password:', password);

      if(username===this.dummy_user && password===this.dummy_password){
        console.log('Login successful')
        this.loginService.login()

        this.router.navigate(['dashboard']);
      }else{
        this.error="Invalid"
        console.log(this.error)
      }
      
    }
  }

  
}
