import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  constructor(private route:Router,private authService:AuthService){}


  navList=[
    { name: 'Home', path: 'home' },
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Contact', path: 'contact' },
    { name: 'About', path: 'about' },
    { name: 'Logout', path: '' }
  ];

 
  navigateTo(path: string): void {
    if (path === '') { 
      this.authService.logout(); 
      this.route.navigate(['home']); 
    } else {
      this.route.navigate([path]); 
    }
  }




}
