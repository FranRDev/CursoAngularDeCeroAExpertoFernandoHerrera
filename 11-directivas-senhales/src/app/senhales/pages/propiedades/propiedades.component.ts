import { Component, computed, signal } from '@angular/core';
import { Usuario } from '../../interfaces/usuario-respuesta.interface';

@Component({
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PaginaPropiedadesComponent {

  public usuario = signal<Usuario>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public nombreCompleto = computed<string>(() => `${this.usuario()!.first_name} ${this.usuario()!.last_name}`);

  campoActualizado(campo: keyof Usuario, valor: string) {
    this.usuario.update(u => {
      switch (campo) {
        case 'avatar':
          u.avatar = valor;
          break;

        case 'email':
          u.email = valor;
          break;

        case 'first_name':
          u.first_name = valor;
          break;

        case 'id':
          u.id = Number(valor);
          break;

        case 'last_name':
          u.last_name = valor;
          break;
      }

      return u;
    })

  }

}
