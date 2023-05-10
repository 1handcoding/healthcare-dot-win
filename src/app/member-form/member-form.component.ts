import { Component, OnInit } from '@angular/core';

import { Member } from '../member'
import { MemberServiceService } from '../services/member-service.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})

export class MemberFormComponent implements OnInit {
  
  selectedMember?: Member;
  
  members: Member[] = [];

  constructor(private memberService: MemberServiceService) { }

  ngOnInit(): void {
    this.getMembers();
  }
  onSelect(member: Member): void {
    this.selectedMember = member;
  }
  getMembers(): void {
    this.memberService.getMembers()
        .subscribe(members => this.members = members);
  }
}
