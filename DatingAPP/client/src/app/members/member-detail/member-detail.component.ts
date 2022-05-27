import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() member!: Member;

  users: User[] = []

  constructor(private userService: AccountService) { }

  ngOnInit(): void {
    this.loadusers();
    console.log(this.member)
  }

  loadusers() {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
    })
  }
  // loadMember() {
  //   const username = this.route.snapshot.paramMap.get('username') as string;
  //   this.memberService.getMember(username).subscribe(member => {
  //     this.member = member;
  //     this.galleryImages = this.getImages();
  //   });
  // }

}
