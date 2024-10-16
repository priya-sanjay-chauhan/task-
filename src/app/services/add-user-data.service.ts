import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddUserDataService {

  private usersSubject = new BehaviorSubject<any[]>([]); 
  users$ = this.usersSubject.asObservable(); 

  constructor(private http: HttpClient) {
   
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.usersSubject.next(data); 
      });
  }


  addUser(newUser: any) {
  
    const currentUsers = this.usersSubject.getValue();
    currentUsers.push(newUser);
    this.usersSubject.next(currentUsers); 
  }
}
