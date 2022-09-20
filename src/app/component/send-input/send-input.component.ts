import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'send-input',
  templateUrl: './send-input.component.html',
  styleUrls: ['./send-input.component.scss'],
})
export class SendInputComponent implements OnInit {

  @Input()  type  = '';
  @Input()  placeholder = '';
  typepassword = 'password';
  public value = '';

  constructor() { }

  ngOnInit() {
  }

  passwordhidden(hiddenshow){
    this.typepassword = hiddenshow;
  }

}
