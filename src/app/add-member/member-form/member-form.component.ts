import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/member';
import { MemberService } from '../member-service.service';
import { MemberListComponent } from '../member-list.component';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})

export class MemberFormComponent {}/*implements OnInit {

  selectedMember?: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  onselect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.memberService.getMembers()
        .subscribe(members => this.members = members);
  }
}*/
