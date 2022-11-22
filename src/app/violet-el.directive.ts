import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appVioletEl]'
})
export class VioletElDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="green"
  }

}
