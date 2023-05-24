import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';
import { MembersService } from '../members.service';
import { MemberFormComponent } from './member-form/member-form.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})

export class AddMemberComponent implements OnInit {
  members: Member[] = [];

  constructor(private membersService: MembersService) { }

  selectedMember!: Member;

  onSelect(member: Member):  void {
    console.log(member);
    this.membersService.selectMember(member).subscribe(selectedMember => this.selectedMember = selectedMember)
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.membersService.getMembers()
    .subscribe(members => this.members = members);
  }
}