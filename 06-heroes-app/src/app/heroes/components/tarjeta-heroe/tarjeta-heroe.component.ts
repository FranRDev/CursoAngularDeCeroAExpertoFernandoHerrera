import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html'
})
export class TarjetaHeroeComponent implements OnInit {

  @Input()
  public heroe!: Heroe;

  ngOnInit(): void {
    if (!this.heroe) { throw Error('Héroe es requerido'); }
  }


}
