import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name = "World";
  constructor() { }


  getName(name){
    this.name = name;
  }

  setName(){
    this.name = 'World'
  }

  ngOnInit() {
  }

  ngOnInit() {
  }

}
