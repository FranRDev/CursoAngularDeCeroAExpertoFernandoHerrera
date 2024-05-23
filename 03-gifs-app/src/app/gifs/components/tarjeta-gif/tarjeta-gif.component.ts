import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'tarjeta-gif',
  templateUrl: './tarjeta-gif.component.html',
  styleUrl: './tarjeta-gif.component.css'
})
export class TarjetaGifComponent {

  @Input()
  public gif?: Gif;

}
