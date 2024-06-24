import { Component, Input } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: true,
  // imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  @Input()
  public contador: number = 10;

}
