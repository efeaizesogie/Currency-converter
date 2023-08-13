// src/app/currency-input/currency-input.component.ts

import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { CurrencyService } from "../currency.service";

@Component({
  selector: "app-currency-input",
  templateUrl: "./currency-input.component.html",
  styleUrls: ["./currency-input.component.css"],
})
export class CurrencyInputComponent {
  fromCurrency: string = "EUR";
  toCurrency: string = "USD";
  amount: number = 1;
  currencyOptions: string[] = ["USD", "EUR", "GBP"];
  currencyData: any;
  result: number = 0;
  currency: string = "";
  static fromCurrency: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.fetchCurrencyOptions();
  }

  fetchCurrencyOptions() {
    this.currencyService.currencies().subscribe(
      (response: any) => {
        this.currencyData = response.data;
        this.currencyOptions = Object.keys(this.currencyData);
      },
      (error: any) => {
        console.error("Error fetching currency options:", error);
      }
    );
  }
}
