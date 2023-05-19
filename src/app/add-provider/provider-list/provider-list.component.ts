import { Component } from '@angular/core';
import { Provider } from 'src/app/provider';
import { PROVIDERS } from 'src/app/providers-array';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent {

  providers = PROVIDERS;

  selectedProvider!: Provider;

  onSelect(provider: Provider):  void {
    this.selectedProvider = provider;
  }

}
