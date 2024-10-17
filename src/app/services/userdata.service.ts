import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService implements OnDestroy {

  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  // private currentId: number=0; 

  subscription:any;
  intervalSubscription:any;
  counterObservable=interval(1000)
  

  constructor(private http: HttpClient) {
 
    this.subscription=this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.usersSubject.next(data); 
        // this.currentId = data.length + 1; 
      }, (error) => {
        console.log("an error occured ", error)
      });

      // this.startInterval()
      
  }

  // getUsers(): Observable<any[]>{
  //   return this.usersSubject.asObservable()
  // }


 startInterval(){
    this.intervalSubscription=this.counterObservable.subscribe((val)=>{
      console.log(val)
    })
   }


  addUser(newUser: any) {

    // newUser.id = this.currentId++;

    
    
    const currentUsers = this.usersSubject.getValue();

    // if (currentUsers.some(user => user.id === newUser.id)) {
    //   console.error("User ID already exists. Cannot add user.");
    //   return; // Prevent adding user with duplicate ID
    // }

    currentUsers.push(newUser);
    this.usersSubject.next(currentUsers); 
    console.log(currentUsers)

    // const currentUsers=this.usersSubject.value;
    // this.usersSubject.next([...currentUsers,newUser])
  }

  



  unsubscribe(){
    if(this.intervalSubscription){
      this.intervalSubscription.unsubscribe()
      console.log("unsubscribe interval")
    }

    if(this.subscription){
      this.subscription.unsubscribe()
      console.log("unsubscribe request")
    }
   }

   ngOnDestroy() {
    this.unsubscribe(); 
  }

}
