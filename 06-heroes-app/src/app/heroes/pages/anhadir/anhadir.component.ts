import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({ selector: 'pagina-anhadir', templateUrl: './anhadir.component.html' })
export class PaginaAnhadirComponent implements OnInit {

  formularioHeroe = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>('')
  });

  publicadores = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' }
  ];

  constructor(
    private servicioHeroes: HeroesService,
    private rutaActiva: ActivatedRoute,
    private enrutador: Router,
    private snackbar: MatSnackBar
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
      this.servicioHeroes.actualizarHeroe(this.heroeActual).subscribe(heroe => this.mostrarSnackbar(`${heroe.superhero} actualizado`));

    } else {
      this.servicioHeroes.anhadirHeroe(this.heroeActual)
        .subscribe(heroe => {
          this.enrutador.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackbar(`${heroe.superhero} añadido`);
        });
    }
  }

  mostrarSnackbar(mensaje: string): void {
    this.snackbar.open(mensaje, 'OK', { duration: 2500 });
  }

}
