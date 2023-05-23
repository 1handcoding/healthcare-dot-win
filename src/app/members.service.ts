import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';
import { MessageService } from './message.service';
import { MEMBERS } from './members-array';

@Injectable({ providedIn: 'root' })
export class MemberService {

  private membersUrl = 'api/members';  // URL to web api

  constructor(private http:  HttpClient, private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
  }

  getMember(id: number): Observable<Member> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const member = MEMBERS.find(m => m.id === id)!;
    this.messageService.add(`HeroService: fetched member id=${id}`);
    return of(member);
  }

    /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
