import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { FormsModule } from '@angular/forms';
import { AngularSlickgridModule } from 'angular-slickgrid';


@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    AngularSlickgridModule.forRoot(),
    CommonModule,
    TransactionsRoutingModule,
    FormsModule
  ]
})
export class TransactionsModule { }
