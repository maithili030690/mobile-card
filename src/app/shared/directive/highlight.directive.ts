import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText ='';
  @Input() highlightColor ='yellow'
  originalHTML ='';
    constructor(private ele:ElementRef) {
      console.log('hello')
      console.log(this.ele)
     }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const {currentValue,firstChange} = changes['highlightText']
    if(firstChange){
      this.originalHTML =this.ele.nativeElement.innerHTML;
      return
    }
    if(currentValue){
      const regexp = new RegExp(`(${currentValue})`,'gi')
      this.ele.nativeElement.innerHTML=this.originalHTML.replace(regexp,`<span style="background-color:${this.highlightColor}">$1</span>`)
    }else{
       this.ele.nativeElement.innerHTML =this.originalHTML
    }
  }

}
