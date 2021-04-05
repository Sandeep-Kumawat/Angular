import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
   @Input() color:string;
   @HostBinding('style.border') hostborder:string;
  constructor(private el:ElementRef, private renderer:Renderer2) { 
    
  }

  changeBgColor(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color);
  }
  @HostListener('click') foo(){
    alert("Hello");
  }
  @HostListener('mouseenter') abc(){
    this.changeBgColor(this.color);
    this.hostborder="5px solid green";
  }
  @HostListener('mouseleave') xyz(){
    this.changeBgColor("black");
    this.hostborder="";
  }

}
