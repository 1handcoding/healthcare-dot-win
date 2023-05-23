import { Component, Input } from '@angular/core';
import { Member } from 'src/app/member';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})

export class MemberFormComponent {
  @Input() member?:Member
}