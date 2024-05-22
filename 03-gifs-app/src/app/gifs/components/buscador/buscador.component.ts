import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'buscador-gifs',
  template: `
    <h5>Buscar: </h5>
    <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="buscar()" #entradaBusqueda>
  `
})
export class BuscadorComponent {

  @ViewChild('entradaBusqueda')
  public entradaBusqueda!: ElementRef<HTMLInputElement>;

  constructor(private servicioGifs: GifsService) { }

  buscar(): void {
    const busqueda = this.entradaBusqueda.nativeElement.value;
    this.servicioGifs.buscar(busqueda);
    this.entradaBusqueda.nativeElement.value = '';
  }

}
