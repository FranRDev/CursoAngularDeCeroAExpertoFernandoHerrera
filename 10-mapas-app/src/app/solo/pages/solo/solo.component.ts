import { Component } from '@angular/core';

import { ContadorComponent } from '../../components/contador/contador.component';

@Component({
  standalone: true,
  imports: [ContadorComponent],
  templateUrl: './solo.component.html',
  styleUrl: './solo.component.css'
})
export class PaginaSoloComponent {

}

