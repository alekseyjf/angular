import {Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('orange');
    }

    @Input('appHighlight') highlightColor: string
    //@Input() : string

    constructor(private el: ElementRef) {
        console.log('highlight', this.el, this.highlightColor);
    }

    highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}
