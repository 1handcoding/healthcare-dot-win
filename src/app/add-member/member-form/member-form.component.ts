import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from 'src/app/member';
import { MembersService } from 'src/app/members.service';
import { defaultIfEmpty } from 'rxjs';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})

export class MemberFormComponent implements OnInit {
  selectedMember: Member | undefined;

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService,
    private location: Location) {}

  ngOnInit(): void {
    this.getMember();
  }

  getSelectedMember(): void {
    this.membersService.getSelectedMember()
    }
  
  getMember(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)}

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.selectedMember) {
      this.membersService.updateMember(this.selectedMember)
        .subscribe(() => this.goBack());
    }
  }
}