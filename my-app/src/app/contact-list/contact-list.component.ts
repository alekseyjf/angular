import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    user;
    @Input('contactUser') userList;

    @Output() userItem = new EventEmitter();

    getUser(user) {
        this.user = user;
        this.userItem.emit(this.user);
    }

    constructor() { }

    ngOnInit() { }

}
