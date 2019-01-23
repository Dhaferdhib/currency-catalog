import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyDetailsComponent } from './currency-catalog/currency-details/currency-details.component';
import { TablePresenterComponent } from './currency-catalog/table-presenter/table-presenter.component';


const routes: Routes = [
  { path: 'currency/:id', component: CurrencyDetailsComponent },
  { path: '', component: TablePresenterComponent },

];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
