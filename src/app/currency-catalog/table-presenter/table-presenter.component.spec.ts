import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePresenterComponent } from './table-presenter.component';
import { RouterModule } from '@angular/router';
import { NullablePipe } from '../pipes/nullable.pipe';

describe('TablePresenterComponent', () => {
  let component: TablePresenterComponent;
  let fixture: ComponentFixture<TablePresenterComponent>;
  let nullable: NullablePipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterModule],
      declarations: [ TablePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    nullable = new NullablePipe();
    fixture = TestBed.createComponent(TablePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
