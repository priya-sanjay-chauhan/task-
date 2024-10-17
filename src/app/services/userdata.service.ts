import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService implements OnDestroy {

  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  private currentId: number=0; 

  subscription:any;
  intervalSubscription:any;
  counterObservable=interval(1000)

  constructor(private http: HttpClient) {
 
    this.subscription=this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.usersSubject.next(data); 
        this.currentId = data.length + 1; 
      }, (error) => {
        console.log("an error occured ", error)
      });

      this.startInterval()
      
  }


 startInterval(){
    this.intervalSubscription=this.counterObservable.subscribe((val)=>{
      console.log(val)
    })
   }


  addUser(newUser: any) {

    newUser.id = this.currentId++;
    
    const currentUsers = this.usersSubject.getValue();
    currentUsers.push(newUser);
    this.usersSubject.next(currentUsers); 
  }


  unsubscribe(){
    if(this.intervalSubscription){
      this.intervalSubscription.unsubscribe()
      console.log("unsubscribe interval")
    }

    if(this.subscription){
      this.subscription.unsubscribe()
      console.log("unsubscribe")
    }
   }

   ngOnDestroy() {
    this.unsubscribe(); 
  }

}
