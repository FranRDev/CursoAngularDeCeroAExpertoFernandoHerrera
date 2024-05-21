import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'buscador-gifs',
  template: `
    <h5>Buscar: </h5>
    <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="buscarEtiqueta()" #entradaEtiqueta>
  `
})
export class BuscadorComponent {

  @ViewChild('entradaEtiqueta')
  public entradaEtiqueta!: ElementRef<HTMLInputElement>;

  constructor() { }

  buscarEtiqueta(): void {
    const etiqueta = this.entradaEtiqueta.nativeElement.value;
    console.log({etiqueta});
  }

}
