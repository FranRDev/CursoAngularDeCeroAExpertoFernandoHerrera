import { Component, Inject } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({ selector: 'app-dialogo-confimacion', templateUrl: './dialogo-confimacion.component.html' })
export class DialogoConfimacionComponent {

  constructor(
    public dialogo: MatDialogRef<DialogoConfimacionComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: Heroe,
  ) { }

  cancelar(): void {
    this.dialogo.close(false);
  }

  confirmar(): void {
    this.dialogo.close(true);
  }

}
