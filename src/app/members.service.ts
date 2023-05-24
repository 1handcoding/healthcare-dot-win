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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


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

  /** PUT: update the hero on the server */
  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, this.httpOptions).pipe(
      tap(_ => this.log(`updated member id=${member.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
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
