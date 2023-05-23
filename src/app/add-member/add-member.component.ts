import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../members.service';
import { MemberFormComponent } from './member-form/member-form.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})

export class AddMemberComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
    .subscribe(members => this.members = members);
  }
}