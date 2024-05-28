import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'pagina-lista',
  templateUrl: './lista.component.html',
  styles: ``
})
export class PaginaListaComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(private servicioHeroes: HeroesService) { }

  ngOnInit(): void {
    this.servicioHeroes.obtenerHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
