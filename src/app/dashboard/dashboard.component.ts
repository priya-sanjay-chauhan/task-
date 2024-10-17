import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserdataService]
})
export class DashboardComponent {
  usersData: any[] = [];
  deletedUserIds: number[] = []; 

  constructor(private userData: UserdataService) {
    this.userData.users$.subscribe((data) => {
      this.usersData = data; 
    });
  }

  deleteUser(index: number) {
    const deletedUser = this.usersData.splice(index, 1)[0]; 
    if (deletedUser) {
      this.deletedUserIds.push(deletedUser.id); 
      console.log("Deleted User ID:", deletedUser.id);
      console.log("Deleted User IDs:", this.deletedUserIds);
    }
  }

  isIdDeleted(id: number): boolean {
    return this.deletedUserIds.includes(id);
  }
}
