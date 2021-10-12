import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  msg = "";

  constructor(
    private svc : UtilsService
  ) { }

  ngOnInit(): void {
  
    this.svc.reciveMsg().subscribe( (val:any )  => {
      console.log( "Shiv kumar", val);
      this.msg = val.name;
    })
  }


}
