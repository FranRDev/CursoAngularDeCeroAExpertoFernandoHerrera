import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[etiquetaPersonalizada]'
})
export class EtiquetaPersonalizadaDirective implements OnInit {

  @Input() set color(valor: string) {
    this._color = valor;
    this.establecerEstilo();
  }

  private elementoHtml?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  constructor(private elemento: ElementRef<HTMLElement>) {
    // console.log('Directiva constructor');
    // console.log(elemento);
    this.elementoHtml = elemento;
  }

  ngOnInit(): void {
    console.log('Directiva OnInit');
    this.establecerEstilo();
  }

  establecerEstilo(): void {
    if (!this.elementoHtml) { return; }
    this.elementoHtml!.nativeElement.style.color = this._color;
  }

}
