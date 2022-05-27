import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../models/Quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http:HttpClient) { }
  private currentQuoteSource$ = new ReplaySubject<Quote | null>(1);
  currentQuote$ = this.currentQuoteSource$.asObservable();
  deleteQuote(){

    
  }
  newQuote(model:any){
    console.log("new quote service");
    return this.http.post<Quote>(this.baseUrl + 'quotes/new-quote', model)
    .pipe(
      map((quote:Quote)=>{
        console.log("new quote service2");
        if(quote){
          this.currentQuoteSource$.next(quote);
        }
        console.log("new quote service3");
        return quote;
      })
    )
  }
  getQuote(model:any){
    console.log("getQuote service");
    return this.http.post<Quote>(this.baseUrl + 'quotes', model)
    .pipe(
      map((quote:Quote)=>{
        if(quote){
          this.currentQuoteSource$.next(quote);
          
        }
        return quote;
      })
    )
  }
  getQuotes(model:any){
    console.log("getQuets service");
    return this.http.post<Quote>(this.baseUrl + 'quotes', model)
    .pipe(
      map((quote:Quote)=>{
        if(quote){
          this.currentQuoteSource$.next(quote);
          
        }
        return quote;
      })
    )
  }
  // getQuotes(): Observable<Quote[]> {
  //   return this.http.get<Quote[]>(`${this.baseUrl}quotes`)
  // }

  // getQuote(quiz: string): Observable<Quote> {
  //   return this.http.get<Quote>(`${this.baseUrl}quotes/${quiz}`)
  // }
  getQuotes2(): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${this.baseUrl}quotes`)
  }

  getQuote2(id: number): Observable<Quote> {
    return this.http.get<Quote>(`${this.baseUrl}quotes/${id}`)
  }
}
