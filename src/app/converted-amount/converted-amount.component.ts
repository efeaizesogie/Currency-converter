// src/app/converted-amount/converted-amount.component.ts

import { Component, Input } from "@angular/core";
import { CurrencyService } from "../currency.service";
import { CurrencyInputComponent } from "../currency-input/currency-input.component";

@Component({
  selector: "app-converted-amount",
  templateUrl: "./converted-amount.component.html",
  styleUrls: ["./converted-amount.component.css"],
})
export class ConvertedAmountComponent {
  fromCurrency: string = "EUR";
  toCurrency: string = "USD";
  amount: number = 0;
  result: number = 0;
  currency: string = "";

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    if (this.fromCurrency && this.toCurrency && this.amount) {
      this.currencyService
        .convertCurrency(this.fromCurrency, this.toCurrency, this.amount)
        .subscribe((response: any) => {
          var conversionRate = response.data[this.toCurrency];
          this.result = conversionRate * this.amount;
          this.amount = 0;
        });
    }
  }
}
