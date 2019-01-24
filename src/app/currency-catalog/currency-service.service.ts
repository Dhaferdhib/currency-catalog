import { Injectable } from '@angular/core';
import { Currency, TableData } from './currency';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {


  constructor() { }

  getAllCurrencies(): Observable<TableData> {
    return of({
      data: this.mockList, 
      totalElements: this.mockList.length,
      lastIndex : 0
    });
  }


  getFiltredAndPaginatedCurrencies(size: number = 10, page: number = 1, filterCriteria: String = '', filterValue: string = ''): Observable<TableData> {
    let filtredAndPaginatedData = this.mockList;
    let filterDataLength = 0;
    //page and size should be greated than zero
    if (size <= 0 || page <= 0)
      return of({
        data: [],
        totalElements: filterDataLength,
        lastIndex : 0
      });
    //filter data using the criteria
    if (filterValue != '' && filterCriteria != '') {
      if (filterCriteria != '') {
        //filter currencies that "contains" the filter value
        if (filterCriteria == 'ID') {
          filtredAndPaginatedData = filtredAndPaginatedData.filter(item => item.id.indexOf(filterValue) >= 0)
        } else if (filterCriteria == 'CODE') {
          filtredAndPaginatedData = filtredAndPaginatedData.filter(item => item.attributes.code && item.attributes.code.indexOf(filterValue) >= 0)
        } else if (filterCriteria == 'NAME') {
          filtredAndPaginatedData = filtredAndPaginatedData.filter(item => item.attributes.name && item.attributes.name.indexOf(filterValue) >= 0)
        } else if (filterCriteria == 'TYPE') {
          filtredAndPaginatedData = filtredAndPaginatedData.filter(item => item.attributes.currency_type && item.attributes.currency_type.indexOf(filterValue) >= 0)
        }
      }
    }
    filterDataLength = filtredAndPaginatedData.length;

    //get the first values for the filtred list
    filtredAndPaginatedData = filtredAndPaginatedData.slice((page - 1) * size, page * size);
    return of({
      data: filtredAndPaginatedData,
      totalElements : filterDataLength,
      lastIndex: filterDataLength % size === 0 ? (filterDataLength / size) : (((filterDataLength - (filterDataLength % size))  / size)+ 1)  
    });
  }

  getCurrencyById(id: string): Observable<Currency>{
    return of(this.mockList.filter(item => item.id === id).pop());
  }


  //todo: replace this via Web service
  private mockList: Currency[] = [
    {
      "id": "USD",
      "attributes": {
        "code": "USD",
        "name": "US Dollar",
        "currency_type": "national",
        "code_iso_numeric3": "840",
        "code_iso_alpha3": "USD",
        "symbol": "$",
        "native_symbol": "$",
        "category": "others"
      },
    },
    {
      "id": "EUR",
      "attributes": {
        "code": "EUR",
        "name": "Euro",
        "currency_type": "national",
        "code_iso_numeric3": "978",
        "code_iso_alpha3": "EUR",
        "symbol": "€",
        "native_symbol": "€",
        "category": "others"
      }
    },
    {
      "id": "JPY",
      "attributes": {
        "code": "JPY",
        "name": "Yen",
        "currency_type": "national",
        "code_iso_numeric3": "392",
        "code_iso_alpha3": "JPY",
        "symbol": "¥",
        "native_symbol": "￥",
        "category": "others"
      }
    },
    {
      "id": "ARS",
      "attributes": {
        "code": "ARS",
        "name": "Argentine Peso",
        "currency_type": "national",
        "code_iso_numeric3": "032",
        "code_iso_alpha3": "ARS",
        "symbol": "AR$",
        "native_symbol": "$",
        "category": "others"
      }
    },
    {
      "id": "CUC",
      "attributes": {
        "code": "CUC",
        "name": "Peso Convertible",
        "currency_type": "national",
        "code_iso_numeric3": "931",
        "code_iso_alpha3": "CUC",
        "symbol": null,
        "native_symbol": null,
        "category": "others"
      }
    },
    {
      "id": "CHF",
      "attributes": {
        "code": "CHF",
        "name": "Swiss Franc",
        "currency_type": "national",
        "code_iso_numeric3": "756",
        "code_iso_alpha3": "CHF",
        "symbol": "CHF",
        "native_symbol": "CHF",
        "category": "others"
      }
    }
  ]


}
