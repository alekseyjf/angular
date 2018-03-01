import { Component, OnInit } from '@angular/core';
import { Colors } from './colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  //test: Colors;
  constructor() { }
  name = "World";
  getName(name){
    this.name = name;
  }

  setName(){
    this.name = 'World'
  }

  ngOnInit() {
  }

}
