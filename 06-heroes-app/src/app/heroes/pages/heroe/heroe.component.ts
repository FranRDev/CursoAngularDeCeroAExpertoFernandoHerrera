import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'pagina-heroe',
  templateUrl: './heroe.component.html',
  styles: ``
})
export class PaginaHeroeComponent implements OnInit {

  public heroe?: Heroe;

  constructor(
    private servicioHeroes: HeroesService,
    private rutaActiva: ActivatedRoute,
    private enrutador: Router
  ) { }

  ngOnInit(): void {
    this.rutaActiva.params
      .pipe(switchMap(({id}) => this.servicioHeroes.obtenerHeroePorId(id)))
      .subscribe(heroe => {
        if (!heroe) { return this.enrutador.navigate(['heroes/lista']); }
        this.heroe = heroe;
        console.log({heroe});
        return;
      });
  }

  public volver(): void {
    this.enrutador.navigateByUrl('heroes/lista');
  }

}
