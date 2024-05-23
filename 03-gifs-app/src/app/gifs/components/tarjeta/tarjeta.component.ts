import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'tarjeta-gif',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaGifComponent implements OnInit {

  ngOnInit(): void {
    if (!this.gif) { throw new Error('Gif es requerido'); }
  }

  @Input()
  public gif!: Gif;

}
