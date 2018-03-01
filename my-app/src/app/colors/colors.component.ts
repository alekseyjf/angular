import {Component, OnInit, OnChanges} from '@angular/core';
import { Color } from './../models/colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit{
    color: Color;
    constructor(){
        this.color = {
            red: 0,
            green: 255,
            blue: 255
        }
    }
    getColor():string {
        return `rgb(${this.color.red}, ${this.color.green},${this.color.blue})`;
    }
    ngOnInit(){
        console.log('init');
    }
    ngOnChanges(){
        console.log('changes');
    }
}