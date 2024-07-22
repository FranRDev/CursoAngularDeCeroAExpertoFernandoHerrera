import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'material',
  standalone: true,
  imports: [],
  templateUrl: './material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MaterialComponent {

}
