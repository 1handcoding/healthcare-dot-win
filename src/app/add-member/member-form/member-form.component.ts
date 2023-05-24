import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from 'src/app/member';
import { MemberService } from 'src/app/members.service';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})

export class MemberFormComponent implements OnInit {
  member: Member | undefined;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private location: Location) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)}

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.member) {
      this.memberService.updateMember(this.member)
        .subscribe(() => this.goBack());
    }
  }
}