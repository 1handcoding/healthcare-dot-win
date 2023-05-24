import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const members = [
    { id: 1, lastName: 'Ejemplo', firstName: 'Ronaldo', isSelected: false }, 
    { id: 2, lastName: 'Ejemplo', firstName: 'Junior', isSelected: false }
    ];;
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
