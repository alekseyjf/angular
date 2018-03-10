import {Component, OnInit, Input} from '@angular/core';
import {Colors} from '../models/colors';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
    @Input() defaultColor: Colors;

    color: Colors;

    constructor() { }

    getColor(): string {
        return `rgb(${this.color.red},${this.color.green},${this.color.blue})`
    }

    ngOnInit() {
        this.color = this.defaultColor;
    }

}
