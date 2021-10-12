import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
 
 subject = new BehaviorSubject({name : "Welcome"})
 data : any;

  constructor() { }

  sendMsg(message:any){
    this.subject.next(message);
  }

  reciveMsg():Observable<any>{
    return this.subject.asObservable();
  }

}


