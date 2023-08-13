// src/app/currency.service.ts


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency: string = '';
 
  private apiKey = 'fca_live_XaMuE2MduqLXcJoTrYzPDRWi4oyCwsrvqi8F3J3a'; // Replace with your actual API key
  private baseUrl = 'https://api.freecurrencyapi.com/v1/';
 

    constructor(private http: HttpClient) {}


 convertCurrency(fromCurrency: string, toCurrency: string, amount: number): Observable<any> {

    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XaMuE2MduqLXcJoTrYzPDRWi4oyCwsrvqi8F3J3a&currencies=${toCurrency}&base_currency=${fromCurrency}`;
    console.log(this.http.get(url));
    return this.http.get(url);
  }


  currencies(): Observable<any> {
      const url = `${this.baseUrl}currencies?apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}

