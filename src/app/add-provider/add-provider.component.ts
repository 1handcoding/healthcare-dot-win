import { Component } from '@angular/core';
import { Provider } from '../provider';
import { PROVIDERS } from '../providers-array';
import { ProviderFormComponent } from './provider-form/provider-form.component';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {
  providers = PROVIDERS;

  selectedProvider!: Provider;

  onSelect(provider: Provider):  void {
    this.selectedProvider = provider;
  }

}
