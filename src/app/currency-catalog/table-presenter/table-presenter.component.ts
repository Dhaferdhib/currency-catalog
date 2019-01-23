import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../currency';
import { CurrencyServiceService } from '../currency-service.service';

@Component({
  selector: 'app-table-presenter',
  templateUrl: './table-presenter.component.html',
  styleUrls: ['./table-presenter.component.css']
})
export class TablePresenterComponent implements OnInit {

  constructor(private currencyService: CurrencyServiceService) { }
  filterValue: string = '';
  filterCriteria: string = 'ID';
  pageSize: number = 5;
  pageNumber: number = 1;

  currencyListObservable: Observable<Currency[]>;

  ngOnInit() {
    this.currencyListObservable = this.currencyService.getFiltredAndPaginatedCurrencies(5)
  }

  onFilterValueChange(recentFilterValue: string): void {
    console.log('onFilterValueChange', recentFilterValue);
    this.filterValue = recentFilterValue;
    this.reloadCurrentList();
  }

  onFilterCriteriaChange(recentFilterCriteria: string): void {
    console.log('onFilterValueChange', recentFilterCriteria);
    this.filterCriteria = recentFilterCriteria;
    this.reloadCurrentList();
  }

  onPageSizeChange(recentPageSizeValue: number):void {
    console.log('onPageSizeChange', recentPageSizeValue);
    this.pageSize =recentPageSizeValue;
    this.reloadCurrentList();

  }

  reloadCurrentList (): void {
    this.currencyListObservable = this.currencyService.
    getFiltredAndPaginatedCurrencies(this.pageSize, this.pageNumber, this.filterCriteria, this.filterValue);
  }

}
