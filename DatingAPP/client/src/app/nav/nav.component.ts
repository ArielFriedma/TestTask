import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { response } from 'express';
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
  model: any = {};
  // loggedIn: boolean = false;
  currentUser$: Observable<User | null>;
  constructor(private accountService: AccountService) { 
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {
  }

  login() {
    const obs = this.accountService.login(this.model)
    .subscribe({
      next: response => {
        console.log(response);
        // this.loggedIn=true;
        console.log('Logged in successfuly');
      },
      error: error=>{
        console.log('Failed to login', error);
      },complete: ()=>console.log('Login Complete')
    });
  }
  
  logout(){
    // this.loggedIn=false;
    this.accountService.logout();
    
  }

 
}
