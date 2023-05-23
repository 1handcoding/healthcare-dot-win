import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const members = [
      { id: 12, firstName: 'Dr. Nice' },
      { id: 13, firstName: 'Bombasto' },
      { id: 14, firstName: 'Celeritas' },
      { id: 15, firstName: 'Magneta' },
      { id: 16, firstName: 'RubberMan' },
      { id: 17, firstName: 'Dynama' },
      { id: 18, firstName: 'Dr. IQ' },
      { id: 19, firstName: 'Magma' },
      { id: 20, firstName: 'Tornado' }
    ];
    return {members};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }
}
