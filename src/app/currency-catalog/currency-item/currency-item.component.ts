import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../currency';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css']
})
export class CurrencyItemComponent implements OnInit {

  @Input() currency : Currency;
  constructor() { }

  ngOnInit() {
  }

}
