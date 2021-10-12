import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myInput : any;

  constructor(
    private svc : UtilsService
  ) { }

  ngOnInit(): void {
  }

  sendData(e:any){
    this.svc.sendMsg({name : this.myInput});
  }
}
