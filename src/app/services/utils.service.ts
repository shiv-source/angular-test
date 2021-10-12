import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

 // subject  = new Subject<any>();
  
 subject = new BehaviorSubject({name : "rohit"})
 data : any;

  constructor() { }

  sendMsg(message:any){
    this.subject.next(message);
  }

  reciveMsg():Observable<any>{
    return this.subject.asObservable();
  }

}


