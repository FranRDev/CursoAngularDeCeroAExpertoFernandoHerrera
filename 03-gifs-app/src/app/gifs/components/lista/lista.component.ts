import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'lista-gifs',
  templateUrl: './lista.component.html'
})
export class ListaGifsComponent {

  @Input()
  public gifs: Gif[] = [];

}
