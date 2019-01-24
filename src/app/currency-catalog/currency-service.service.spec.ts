import { TestBed, inject } from '@angular/core/testing';

import { CurrencyServiceService } from './currency-service.service';

describe('CurrencyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyServiceService]
    });
  });

  it('should be created', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('#getAllCurrencies should be truthy', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    expect(service.getAllCurrencies()).toBeTruthy();
  }));

  it('#getAllCurrencies should return correct size', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    service.getAllCurrencies().subscribe(result => expect(result.totalElements).toBe(6));
  }));

  it('#getFiltredAndPaginatedCurrencies should be truthy', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    expect(service.getFiltredAndPaginatedCurrencies()).toBeTruthy();
  }));

  it('#getFiltredAndPaginatedCurrencies should return less than 10 elements', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    service.getFiltredAndPaginatedCurrencies().subscribe(result=> expect(result.totalElements).toBeLessThan(10));
  }));

  it('#getFiltredAndPaginatedCurrencies should return specific element', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    service.getFiltredAndPaginatedCurrencies(10,1,'ID','USD').subscribe(result=> expect(result.totalElements).toBe(1));
    service.getFiltredAndPaginatedCurrencies(1, 2, 'TYPE','national').subscribe(result => expect(result.data.length).toBe(1));
    service.getFiltredAndPaginatedCurrencies(4, 1, 'TYPE','national').subscribe(result => expect(result.data.length).toBe(4));
    service.getFiltredAndPaginatedCurrencies(4, 2, 'TYPE','national').subscribe(result => expect(result.data.length).toBe(2));
    service.getFiltredAndPaginatedCurrencies(4, 3, 'TYPE','national').subscribe(result => expect(result.data.length).toBeFalsy());
    service.getFiltredAndPaginatedCurrencies(4, 3, 'TYPE','xyz').subscribe(result => expect(result.data.length).toBeFalsy());
    service.getFiltredAndPaginatedCurrencies(4, 2, '','').subscribe(result => expect(result.data.length).toBe(2));
    service.getFiltredAndPaginatedCurrencies(4, 1, '','').subscribe(result => expect(result.data.length).toBe(4));
    service.getFiltredAndPaginatedCurrencies(-1, 0, '','').subscribe(result => expect(result.data.length).toBe(0));

  }));


  it('#getCurrencyById', inject([CurrencyServiceService], (service: CurrencyServiceService) => {
    service.getFiltredAndPaginatedCurrencies(10,1,'ID','USD').subscribe(result=> expect(result.totalElements).toBe(1));
    service.getCurrencyById('USD').subscribe(currency => expect(currency).toBeTruthy());
    service.getCurrencyById('FAKE').subscribe(currency => expect(currency).toBeFalsy());

  }));


});
