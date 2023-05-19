import { Component, Input } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../members-array';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})

export class AddMemberComponent {

  /*setSelectedMember(member: Member) {
    this.selectedMember = member;
  }*/
}