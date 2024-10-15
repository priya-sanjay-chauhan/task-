import { Component } from '@angular/core';
import {UserdataService} from '../services/userdata.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users:any;

  constructor(private userData:UserdataService){
    userData.users().subscribe((data)=>{
      this.users=data;
      console.log(this.users)
    })
  }

}
