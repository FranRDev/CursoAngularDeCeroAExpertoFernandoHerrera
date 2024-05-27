import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'pagina-poco-comun',
  templateUrl: './poco-comun.component.html',
  styleUrl: './poco-comun.component.css'
})
export class PaginaPocoComunComponent {

  // i18nSelect
  public nombre: string = 'Fernando';
  public genero: 'masculino' | 'femenino' = 'masculino';
  public mapaInvitacion = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }

  public cambiarCliente(): void {
    this.nombre = 'Raquel';
    this.genero = 'femenino';
  }

  // i18Plural
  public clientes: string[] = ['María', 'Pedro', 'Francisco', 'Hernando', 'Eduardo', 'Raquel', 'Natalia'];
  public mapaClientes = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  public borrarCliente(): void {
    this.clientes.shift();
  }

  // KeyValue
  public persona = {
    nombre: 'Francisco',
    edad: 28,
    direccion: 'Sevilla, España'
  }

  // Async
  public temporizadorObservable: Observable<number> = interval(2000).pipe(tap(valor => console.log('tap:', valor)));

  public valorPromesa: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos en la promesa');
      console.log('Tenemos datos en la promesa');
      this.persona.nombre = 'Otro nombre';
    }, 3500);
  }

  )

}
