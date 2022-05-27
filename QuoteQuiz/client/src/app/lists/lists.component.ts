import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../models/Quote';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() quote!: Quote;

  // users: User[] = []

  constructor() { }

  ngOnInit(): void {
    // this.loadusers();
    // console.log(this.member)
  }

  // loadusers() {
  //   this.userService.getUsers()
  //   .subscribe(users => {
  //     this.users = users;
  //   })
  // }

}
