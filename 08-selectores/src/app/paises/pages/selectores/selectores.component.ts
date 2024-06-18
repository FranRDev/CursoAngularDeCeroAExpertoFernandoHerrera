import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PaisesService } from '../../services/paises.service';
import { Region } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'pagina-selectores',
  templateUrl: './selectores.component.html'
})
export class PaginaSelectoresComponent implements OnInit {

  public formulario: FormGroup = this.fb.group({
    continente: ['', Validators.required],
    pais: ['', Validators.required],
    fronteras: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private servicioPaises: PaisesService
  ) { }

  ngOnInit(): void {
    this.continenteCambiado();
  }

  get continentes(): Region[] {
    return this.servicioPaises.continentes;
  }

  continenteCambiado(): void {
    this.formulario.get('continente')!.valueChanges.subscribe(continente => { console.log(continente); })
  }

}
