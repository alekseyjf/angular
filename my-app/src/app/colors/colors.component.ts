import {Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {Colors} from '../models/colors';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit, OnChanges {
    @Input() defaultColor: Colors;
    @Input() name: string;
    color: Colors;
    clicksCount: number = 0;

    constructor() {

    }

    @Output() colorChanged = new EventEmitter<number>()

    setName(){
        console.log(this.name);
    }

    getColor(): string {
        return `rgb(${this.color.red},${this.color.green},${this.color.blue})`
    }

    ngOnInit() {
        console.log(this.defaultColor);
        this.color = this.defaultColor;
    }

    ngOnChanges(changed) {
        console.log( 'onChange', changed );
        this.color = changed.defaultColor.currentValue;
    }

    panelClicked(){
        this.clicksCount++;
        this.colorChanged.emit(this.clicksCount);
    }

}
