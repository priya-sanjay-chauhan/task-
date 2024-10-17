import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();
  private deletedUserIds: number[] = []; 

  // private currentId: number=0; 

  constructor(private http: HttpClient) {
 
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.usersSubject.next(data); 
        // this.currentId = data.length + 1; 
      });
  }


  addUser(newUser: any) {

    // newUser.id = this.currentId++;
    
    const currentUsers = this.usersSubject.getValue();
    currentUsers.push(newUser);
    this.usersSubject.next(currentUsers); 
  }

  // getCurrentUsers() {
  //   return this.usersSubject.getValue(); // Return current users
  // }

}
