import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: any = FormGroup;

  @Input() title?: string;
  @Input() data: Array<ICustomForm> = [];
  
  @Output() saveEvent = new EventEmitter();

  submitted : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    let obj: any = {};

    for (let x of this.data) {
      obj[x.formControlName] = ['', [Validators.required]];
    };

    this.formGroup = this.formBuilder.group({ ...obj });
  }

  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {

    this.submitted = true;
  
    if(this.formGroup.invalid){
      return;
    }


    this.saveEvent.emit(this.formGroup.value);
  }

  onReset(){
    this.submitted = false;
    this.formGroup.reset();
  }

}


export interface ICustomForm {
  type: string,
  required: boolean,
  formControlName: string,
  placeholder: string
}
