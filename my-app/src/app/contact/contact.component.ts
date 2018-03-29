import { Component , OnInit} from '@angular/core';

const contactList = [
  {id: "id1", name : "Alex1", surname : "fire1" },
  {id: "id2", name : "Alex2", surname : "fire2" },
  {id: "id3", name : "Alex3", surname : "fire3" },
  {id: "id4", name : "Alex4", surname : "fire4" },
  {id: "id5", name : "Alex5", surname : "fire5" }
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userList: any[] = contactList;
  userSelect;

  constructor() {

  }

  ngOnInit() {
  }

  getUser(user){
    this.userSelect = user;
  }

}
