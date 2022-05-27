import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Quote } from '../models/Quote';
import { User } from '../models/User';
import { AccountService } from '../services/account.service';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
gameType:string ="";
yesNo:boolean =true;
quotes: any;
model:any = {};
member: User[] | undefined;
quote1: Quote | undefined;
@Input() quoteFromQuoteComponent: any;
  constructor(private accountService: AccountService,private http:HttpClient, private quoteService: QuoteService) { }

  quote: Quote[] = []

  // loadMember() {
    
  //   this.accountService.getUsers().subscribe(member => {
  //     this.member = member;

  //   });
  // }
  ngOnInit(): void {
  this.quotes=this.quoteService;
  this.loadQuotes();

    
  }
  loadQuotes() {
    this.quoteService.getQuotes2()
    .subscribe(quotes => {
      this.quotes = quotes;
    })

  }


  sendRadio(){}
  startGame(a: number){
    if (a) {
      console.log("Yes/no");
      this.yesNo=true;
    }
    else{
      this.yesNo=false;
    }
  }
  getQuotes(){
    this.quoteService.getQuotes(this.model).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error)
      }
    )
  }


  getQuote(){
    this.http.get('https://localhost:5001/api/quotes')
    .subscribe(
      quotes => this.quotes = quotes,
      error => console.log(error))
  }
  


}
