import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  @HostListener('mouseenter') onMouseEnter(){
      this.highlight(this.highlightColor)
  }
  @HostListener('mouseleave') onMouseLeave(){
      this.highlight('yellow')
  }

  //@Input() : string
  @Input('appHighlight') highlightColor : string

  constructor(private el: ElementRef) {
      console.log('hello from directive', this.el);
  }

  highlight( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
