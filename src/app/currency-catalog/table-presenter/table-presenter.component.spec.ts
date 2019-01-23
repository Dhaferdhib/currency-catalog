import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePresenterComponent } from './table-presenter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NullablePipe } from '../pipes/nullable.pipe';
import { CurrencyItemComponent } from '../currency-item/currency-item.component';

describe('TablePresenterComponent', () => {
  let component: TablePresenterComponent;
  let fixture: ComponentFixture<TablePresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule],
      declarations: [ TablePresenterComponent, NullablePipe, CurrencyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
