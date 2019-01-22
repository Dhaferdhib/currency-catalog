import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyDetailsComponent } from './currency-catalog/currency-details/currency-details.component';
import { TablePresenterComponent } from './currency-catalog/table-presenter/table-presenter.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrencyDetailsComponent,
        TablePresenterComponent
      ],
      imports: [AppRoutingModule]
    }).compileComponents();
  }));
});
