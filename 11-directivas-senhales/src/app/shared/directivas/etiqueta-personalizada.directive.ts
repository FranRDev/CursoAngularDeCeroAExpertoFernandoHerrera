import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[etiquetaPersonalizada]'
})
export class EtiquetaPersonalizadaDirective implements OnInit {

  @Input() set color(valor: string) {
    this._color = valor;
    this.establecerEstilo();
  }

  @Input() set errores(valor: ValidationErrors | null | undefined) {
    this._errores = valor;
    console.log(this._errores);
    this.establecerMensajeError();
  }

  private elementoHtml?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errores?: ValidationErrors | null | undefined;

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

  establecerMensajeError(): void {
    if (!this.elementoHtml) { return; }

    if (!this._errores) {
      this.elementoHtml.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errores = Object.keys(this._errores);

    if (errores.includes('required')) {
      this.elementoHtml.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if (errores.includes('minlength')) {
      this.elementoHtml.nativeElement.innerText = 'Debe tener más de 6 caracteres';
      return;
    }

    if (errores.includes('email')) {
      this.elementoHtml.nativeElement.innerText = 'El formato de correo no es válido';
      return;
    }
  }

}
