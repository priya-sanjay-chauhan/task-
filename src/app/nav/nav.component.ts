import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  constructor(private route:Router){}
  loginService = inject(AuthService)

  navList=[
    { name: 'Home', path: 'home' },
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Contact', path: 'contact' },
    { name: 'About', path: 'about' },
    { name: 'Logout', path: '' }
  ];

  navigateTo(path:string){
    this.route.navigate([path])
   
  }

  logoutNow(){
    this.loginService.logout()
  }



}
