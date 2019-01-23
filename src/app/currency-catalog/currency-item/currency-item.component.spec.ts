import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { CurrencyItemComponent } from './currency-item.component';
import { NullablePipe } from '../pipes/nullable.pipe';
import { Currency } from '../currency';
describe('CurrencyItemComponent', () => {
  let component: CurrencyItemComponent;
  let fixture: ComponentFixture<CurrencyItemComponent>;
  let currency: Currency;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule],
      declarations: [ CurrencyItemComponent, NullablePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyItemComponent);
    component = fixture.componentInstance;
    currency = new Currency();
    currency.id = 'ABS';
    currency.attributes = {
      "category":"national",
      "code":"A",
      "code_iso_numeric3":"none",
      "currency_type":"none",
      "name":"anone",
      "symbol":"@",
      "native_symbol":"@",
      "code_iso_alpha3":"none"
    };
    component.currency = currency;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
