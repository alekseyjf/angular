import { Component, OnInit } from '@angular/core';
import { Contact } from 'contact'

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})
export class ContactsComponentComponent implements OnInit {
  //contact = Contact;
  userList: any[] = [
      {name: 'Alex1', surname: 'Sur-alex1'},
      {name: 'Alex2', surname: 'Sur-alex2'},
      {name: 'Alex3', surname: 'Sur-alex3'},
      {name: 'Alex4', surname: 'Sur-alex4'},
      {name: 'Alex5', surname: 'Sur-alex5'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
