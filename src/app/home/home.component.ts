import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myInput : any;

  formData = [
    {
      type : 'text',
      required : true,
      formControlName : 'firstName',
      placeholder : 'Type First Name'
    },
    {
      type : 'text',
      required : true,
      formControlName : 'lastName',
      placeholder : 'Type Last Name'
    },
    {
      type : 'email',
      required : true,
      formControlName : 'email',
      placeholder : 'Type Email...'
    },
    {
      type : 'password',
      required : true,
      formControlName : 'password',
      placeholder : 'Type Password Here..'
    },
  ]

  formTitle = "My Form"

  constructor(
    private svc : UtilsService
  ) { }

  ngOnInit(): void {
  }

  sendData(e:any){
    this.svc.sendMsg({name : this.myInput});
  }


  onSaveForm(e:any){
    console.log(e)
  }
}
