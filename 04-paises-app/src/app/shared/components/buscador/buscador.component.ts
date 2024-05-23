import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {

  @ViewChild('entradaBusqueda')
  private entradaBusqueda!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public buscando = new EventEmitter<string>;

  public buscar() {
    this.buscando.emit(this.entradaBusqueda.nativeElement.value);
  }

}
