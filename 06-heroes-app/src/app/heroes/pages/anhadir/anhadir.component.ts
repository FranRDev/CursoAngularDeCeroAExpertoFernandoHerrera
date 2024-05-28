import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'pagina-anhadir',
  templateUrl: './anhadir.component.html'
})
export class PaginaAnhadirComponent implements OnInit {

  public formularioHeroe = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>('')
  });

  public publicadores = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' }
  ];

  constructor(
    private servicioHeroes: HeroesService,
    private rutaActiva: ActivatedRoute,
    private enrutador: Router
  ) { }

  ngOnInit(): void {
    if (!this.enrutador.url.includes('editar')) { return; }

    this.rutaActiva.params
      .pipe(switchMap(({ id }) => this.servicioHeroes.obtenerHeroePorId(id)))
      .subscribe(heroe => {
        if (!heroe) { return this.enrutador.navigateByUrl('/'); }
        this.formularioHeroe.reset(heroe);
        return;
      });
  }

  get heroeActual(): Heroe {
    const heroe = this.formularioHeroe.value as Heroe;
    return heroe;
  }

  enviarFormulario(): void {
    if (this.formularioHeroe.invalid) { return; }

    if (this.heroeActual.id) {
      this.servicioHeroes.actualizarHeroe(this.heroeActual).subscribe(heroe => { }); // TODO: Mostrar snakbar

    } else {
      this.servicioHeroes.anhadirHeroe(this.heroeActual).subscribe(heroe => { }); // TODO: ...
    }
  }

}
