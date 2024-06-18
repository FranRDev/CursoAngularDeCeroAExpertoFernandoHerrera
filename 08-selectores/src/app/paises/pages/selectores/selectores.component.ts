import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PaisesService } from '../../services/paises.service';
import { Region } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'pagina-selectores',
  templateUrl: './selectores.component.html'
})
export class PaginaSelectoresComponent {

  public formulario: FormGroup = this.fb.group({
    continente: ['', Validators.required],
    pais: ['', Validators.required],
    fronteras: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private servicioPaises: PaisesService
  ) { }

  get continentes(): Region[] {
    return this.servicioPaises.continentes;
  }

}
