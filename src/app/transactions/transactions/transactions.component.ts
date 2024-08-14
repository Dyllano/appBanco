import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  constructor(private dataService: DataService, public service: ServiceService){}

  sTipo: string = '';
  sNumeroCuenta: string = '';
  sAmount: string = '';
  sCategoria: string = '';
  sDescripcion: string = '';
  sEstado: string = '';

  mensaje: string = '';

  bPreguntar: boolean = false;

  subscripcion : Subscription = new Subscription();

  GOTransactions: GridOption = {}

  columnDefinition: Column[] = [];

  transactions: any [] = [];

  ngOnInit(){
    this.GOTransactions = {
      enableAutoResize: true,
      enableSorting: true,
      autoResize: {
        calculateAvailableSizeBy: 'container',
        container: '#demo-container',
        resizeDetection: 'container'
      }
    };

    this.columnDefinition = [
      {id: 'id', name: 'NumeTran', field: 'NumeTran', sortable: true},
      {id: 'Type', name: 'Type', field: 'Type', sortable: true},
      {id: 'Date', name: 'Date', field: 'Date', sortable: true},
      {id: 'Amount', name: 'Amount', field: 'Amount', sortable: true},
      {id: 'Category', name: 'Category', field: 'Category', sortable: true},
      {id: 'Description', name: 'Description', field: 'Description', sortable: true},
      {id: 'Status', name: 'Status', field: 'Status', sortable: true},
      {id: 'Balance', name: 'Balance', field: 'Balance', sortable: true},
    ];
  }

  fnSaveTransaction(){

    this.bPreguntar = true;

    this.subscripcion = this.service.ResObserver$.subscribe((res: any) =>{
      this.subscripcion.unsubscribe();
      this.bPreguntar = false;
      if(res == 'si'){
        this.fnDoSaveTransaction();
      }

    });

  }

  fnDoSaveTransaction(){
      this.dataService.fnSaveTransaction(this.sTipo, this.sNumeroCuenta, this.sAmount, this.sCategoria, 
        this.sDescripcion, this.sEstado).subscribe({
          next: res => {
            console.log(res);

            var lRow = res[0];

            for(var i in lRow){
              if(i == "Error"){
                this.mensaje = res[0].Error;
                return;
              }
            }

            this.transactions = this.fnCalcBalances(res); 
            this.mensaje = "Guardado Exitoso";
          }
        })
  }

  fnCalcBalances(transactions: any[]): any[] {
    var saldo : number = 0;
    for(var i = transactions.length -1 ; i >= 0; i--){
      if(transactions[i].Type == 'Deposito'){
        saldo += transactions[i].Amount;
      }else{
        saldo -= transactions[i].Amount;
      }
      transactions[i].Balance = saldo;
    }
    return transactions;
  }
}
