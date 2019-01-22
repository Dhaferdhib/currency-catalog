import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TablePresenterComponent } from './currency-catalog/table-presenter/table-presenter.component';
import { CurrencyDetailsComponent } from './currency-catalog/currency-details/currency-details.component';
import { NullablePipe } from './currency-catalog/pipes/nullable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablePresenterComponent,
    CurrencyDetailsComponent,
    NullablePipe
 ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
