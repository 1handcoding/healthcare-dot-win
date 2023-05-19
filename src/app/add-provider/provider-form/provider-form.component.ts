import { Component, Input } from '@angular/core';
import { Provider } from 'src/app/provider';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent {
  @Input() provider?: Provider;
}
