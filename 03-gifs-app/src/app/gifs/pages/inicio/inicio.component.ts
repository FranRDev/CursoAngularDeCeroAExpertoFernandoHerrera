import { Component } from '@angular/core';
import { ServicioGifs } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'pagina-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent {

  constructor(private servicioGifs: ServicioGifs) {}

  get gifs(): Gif[] {
    return this.servicioGifs.listaGifs;
  }

}
