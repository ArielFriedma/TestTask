import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any ={};
  username:string="";
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter<boolean>();

  constructor(private accountService: AccountService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
  this.accountService.register(this.model).subscribe(
    (data)=>{
      console.log(data);
      this.router.navigateByUrl('/members');
      this.cancel();
    },
    error=>{console.log(error);},
    ()=>{
      this.username=this.model?.username;
    }
  )}
  cancel(){
    this.cancelRegister.emit(false);    
  }
}
