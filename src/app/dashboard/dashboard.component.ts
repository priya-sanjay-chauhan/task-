import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[UserdataService]
})
export class DashboardComponent {

  users: any[]=[];

  constructor(private userData: UserdataService) {
  
    this.userData.users$.subscribe((data) => {
      this.users = data; 
    });
  }
}

