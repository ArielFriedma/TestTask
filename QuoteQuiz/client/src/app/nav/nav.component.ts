import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { userInfo } from 'os';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { User } from '../models/User';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() username!: string;
  model: any = {};
 
  // loggedIn: boolean = false;
  currentUser$: Observable<User | null>;
  constructor(private accountService: AccountService, private router: Router) { 
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {
  }

  login() {
    
    const obs = this.accountService.login(this.model)
    .subscribe({
      next: response => {
        console.log(response);
        console.log('Logged in successfuly');
        this.router.navigateByUrl('/play');
      },
      error: error=>{
        console.log('Failed to login', error);
      },complete: ()=>{
        console.log('Login Complete');
        this.username = this.model?.username;
    }
    });
  }
  
  logout(){
    // this.loggedIn=false;
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.username="";
  }

 
}
