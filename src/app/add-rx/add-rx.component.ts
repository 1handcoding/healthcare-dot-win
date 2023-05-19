import { Component } from '@angular/core';
import { Rx } from '../rx';
import { RX } from '../rx-array';

@Component({
  selector: 'app-add-rx',
  templateUrl: './add-rx.component.html',
  styleUrls: ['./add-rx.component.css']
})
export class AddRxComponent {
  rxs = RX;

  selectedRx!: Rx;

  onSelect(rx: Rx):  void {
    this.selectedRx = rx;
  }
}
