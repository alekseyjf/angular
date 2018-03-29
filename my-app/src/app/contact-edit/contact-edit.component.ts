import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnChanges {
  @Input() userInput;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    if( this.userInput ){
      console.log(this.userInput.id)
    }
  }

}
