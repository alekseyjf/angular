import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit, OnChanges {
  @Input() userOpt;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){

  }

}
