import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[etiquetaPersonalizada]'
})
export class EtiquetaPersonalizadaDirective implements OnInit {

  private elementoHtml?: ElementRef<HTMLElement>;

  constructor(private elemento: ElementRef<HTMLElement>) {
    // console.log('Directiva constructor');
    this.elementoHtml = elemento;
  }

  ngOnInit(): void {
    console.log('Directiva OnInit');
  }

}
