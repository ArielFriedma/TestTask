import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  gameType:string ="";
  yesNo:boolean =true;
  model:any = {};
  quote:any;
  quoteFromQuoteComponent: any;
  constructor(private quoteService:QuoteService, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  startGame(a: number){
    if (a) {
      console.log("Yes/no");
      this.yesNo=true;
    }
    else{
      this.yesNo=false;
    }
  }
  newQuoteMulti(){
    console.log("need to save new Multi query in DB")
  }
  newQuote(){
    this.quoteService.newQuote(this.model).subscribe(
      (data)=>{
        console.log(data);
        this.cancel();
      },
      error=>{console.log(error);},
      ()=>{
      }
    )}
    cancel(){
         this.router.navigateByUrl("play");
    }
    getQuotes(){
      console.log("getQuote component");
      this.quoteService.getQuote(this.model).subscribe(
        (data) => {
          console.log(data);
        },
        error => {
          console.log(error)
        }
      )
    }
  
  
    getQuote(){
      console.log("getQuotes component");
      this.http.get('https://localhost:5001/api/quote')
      .subscribe(
        quote => this.quote = quote,
        error => console.log(error))
    }



}
