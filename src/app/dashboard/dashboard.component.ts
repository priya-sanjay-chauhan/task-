import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  usersData: any[] = [];
  deletedUserIds: number[] = [];
  existingUserIds: number[] = [];

  constructor(private userDataService: UserdataService) {
   
    this.userDataService.users$.subscribe((data) => {
      this.usersData = data;
      this.existingUserIds = data.map(user => user.id);
    });
  }

  deleteUser(index: number) {
    const deletedUser = this.usersData.splice(index, 1)[0]; 
    if (deletedUser) {
      this.deletedUserIds.push(deletedUser.id); 
      this.existingUserIds = this.usersData.map(user => user.id);
    }
  }
}
