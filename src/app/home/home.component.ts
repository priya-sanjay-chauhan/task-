import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(''), 
      password: new FormControl(''), 
    });
  }

  ngOnInit(): void {

    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // console.log('Username:', username);
      // console.log('Password:', password);

      if(username===this.dummy_user && password===this.dummy_password){
        console.log('Login successful')
        this.router.navigate(['dashboard']);
      }else{
        this.error="Invalid"
        console.log(this.error)
      }
      
    }
  }

}
