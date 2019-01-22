import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CurrencyServiceService } from '../currency-service.service';
import { Currency } from '../currency';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {


  private currency : Currency;
  constructor(private route: ActivatedRoute, private currencyService: CurrencyServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currencyService.getCurrencyById(params.get("id")).subscribe(item => {
        this.currency = item;
        console.log(this.currency);
      })
    })
  }

}
