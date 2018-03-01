import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Color } from './../models/colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit{
    @Input() defaultColor: color;
    color: Color;
    constructor(){
        this.color = {
            red: 0,
            green: 255,
            blue: 255
        }
    }

    clicksCount: number
    @Output() colorChanged = new EventEmitter<number>()

    getColor():string {
        return `rgb(${this.color.red}, ${this.color.green},${this.color.blue})`;
    }
    ngOnInit(){
        this.color = this.defaultColor;
        console.log('init');
    }
    ngOnChanges(){
        console.log('changes');
    }

    panelClicked(){

    }

}