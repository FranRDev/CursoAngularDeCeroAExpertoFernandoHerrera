import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public contador: number = 10;

  incrementarPor(valor: number): void {
    this.contador += valor;
  }

  reiniciar() {
    this.contador = 10;
  }

}
