import { Component, Input } from '@angular/core';
import { Rx } from 'src/app/rx';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.css']
})
export class RxFormComponent {
  @Input() rx?: Rx;
}
