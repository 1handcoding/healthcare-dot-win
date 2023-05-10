import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Member } from '../member';
import { MEMBERS } from '../members-array';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private memberService: MemberServiceService) { }

    getMembers(): Observable<Member[]> {
      const members = of(MEMBERS);
      return members;
  }
}
