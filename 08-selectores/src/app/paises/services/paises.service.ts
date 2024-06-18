import { Injectable } from '@angular/core';
import { PaisReducido, Region } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _continentes: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ]

  constructor() { }

  get continentes(): Region[] {
    return [...this._continentes];
  }

  obtenerPaisesPorContinente(continente: Region): PaisReducido[] {

    return [];
  }

}
