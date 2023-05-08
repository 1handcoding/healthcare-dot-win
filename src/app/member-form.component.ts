import { Component } from '@angular/core';
import { Member } from './member'
import { MEMBERS } from './membersArray';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})


export class MemberFormComponent {
  members = MEMBERS;
}
