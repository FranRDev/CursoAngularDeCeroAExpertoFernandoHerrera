import { Component, computed, effect, OnInit, signal } from '@angular/core';

import { Usuario } from '../../interfaces/usuario-respuesta.interface';

@Component({
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PaginaPropiedadesComponent implements OnInit {
  public contador = signal(10);

  public usuario = signal<Usuario>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public nombreCompleto = computed<string>(() => `${this.usuario()!.first_name} ${this.usuario()!.last_name}`);

  public efectoCambioUsuario = effect(() => {
    console.log(`${this.usuario().first_name} - ${this.contador()}`);
  });

  ngOnInit(): void {
    // setInterval(() => {
    //   this.contador.update(c => c + 1);
    // }, 1000);
  }

  campoActualizado(campo: keyof Usuario, valor: string) {
    this.usuario.update(usuario => {
      switch (campo) {
        case 'avatar':
          usuario.avatar = valor;
          break;

        case 'email':
          usuario.email = valor;
          break;

        case 'first_name':
          usuario.first_name = valor;
          break;

        case 'id':
          usuario.id = Number(valor);
          break;

        case 'last_name':
          usuario.last_name = valor;
          break;
      }

      return usuario;
    });
  }

  incrementar(valor: number) {
    this.contador.update(c => c + valor);
  }

}
