import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[aspire-color]'
})
export class ColorDirective implements OnInit{
  @Input()
  private colorOption:string;

  constructor(private elementRef: ElementRef,private renderer:Renderer2) {


  }

  setBgColor(color)
  {
     this.renderer.setStyle(this.elementRef.nativeElement,
       'backgroundColor',color);
  }


  @HostListener('mouseenter')
  onMouseEnter()
  {
       this.setBgColor('red');
  }

  @HostListener('mouseleave')
  onMouseLeave()
  {
     this.setBgColor('blue');
  }

  ngOnInit(): void {
    console.log(this.colorOption);
    if(this.colorOption.length>0)
      this.setBgColor(this.colorOption);
    else
      this.setBgColor('black');
  }

}
