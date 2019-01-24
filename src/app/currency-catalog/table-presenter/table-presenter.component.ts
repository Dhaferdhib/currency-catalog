import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency, TableData } from '../currency';
import { CurrencyServiceService } from '../currency-service.service';
import { ThrowStmt } from '@angular/compiler';

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
  currencyListObservable: Observable<TableData>;
  lastIndex: number = 0;

  ngOnInit() {
    this.currencyListObservable = this.currencyService.getFiltredAndPaginatedCurrencies(5);
    this.currencyListObservable.subscribe(result =>{
      this.lastIndex = result.lastIndex;
    })
  }

  onFilterValueChange(recentFilterValue: string): void {
    this.filterValue = recentFilterValue;
    this.reloadCurrentList();
  }

  onFilterCriteriaChange(recentFilterCriteria: string): void {
    this.filterCriteria = recentFilterCriteria;
    this.reloadCurrentList();
  }

  onPageSizeChange(recentPageSizeValue: number): void {
    this.pageSize = recentPageSizeValue;
    this.pageNumber = 1;
    this.reloadCurrentList();

  }

  reloadCurrentList(): void {
    this.currencyListObservable = this.currencyService.
      getFiltredAndPaginatedCurrencies(this.pageSize, this.pageNumber, this.filterCriteria, this.filterValue);
      this.currencyListObservable.subscribe(result =>{
        this.lastIndex = result.lastIndex;
      })
  }

  onPageChanged(newPageNumber: number): void {
    this.pageNumber = newPageNumber;
    this.reloadCurrentList();
  }

}
