import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { filter, switchMap, tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';
import { PaisReducido, Region } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'pagina-selectores',
  templateUrl: './selectores.component.html'
})
export class PaginaSelectoresComponent implements OnInit {

  public paisesPorContinente: PaisReducido[] = [];
  public fronterasPorPais: PaisReducido[] = [];

  public formulario: FormGroup = this.fb.group({
    continente: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private servicioPaises: PaisesService
  ) { }

  ngOnInit(): void {
    this.continenteCambiado();
    this.paisCambiado();
  }

  get continentes(): Region[] {
    return this.servicioPaises.continentes;
  }

  continenteCambiado(): void {
    this.formulario.get('continente')!.valueChanges
      .pipe(
        tap(() => this.formulario.get('pais')!.setValue('')),
        tap(() => this.fronterasPorPais = []),
        switchMap(continente => this.servicioPaises.obtenerPaisesPorContinente(continente))
      )
      .subscribe(paises => this.paisesPorContinente = paises)
  }

  paisCambiado(): void {
    this.formulario.get('pais')!.valueChanges
      .pipe(
        tap(() => this.formulario.get('frontera')!.setValue('')),
        filter((valor: string) => valor.length > 0),
        switchMap(codigoAlfa => this.servicioPaises.obtenerPaisPorCodigoAlfa(codigoAlfa)),
        switchMap(pais => this.servicioPaises.obtenerPaisesFronterasPorCodigoAlfa(pais.fronteras))
      )
      .subscribe(fronteras => this.fronterasPorPais = fronteras)
  }

}
