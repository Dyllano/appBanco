import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  constructor(private data: DataService, public service: ServiceService){}

  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];

  accounts: any[] = [];

  lstrUser: string ="";

  lstrNombreCuenta: string = "";
  lstrNumeroCuenta: string = "";

  mensaje: string = '';

  bPreguntar: boolean = false;

  public subscription: Subscription = new Subscription();

  ngOnInit(){
    this.GPAccounts = {
      autoResize: {container: '#idgridAccounts', rightPadding: 5},
      enableAutoResize: true,
      gridHeight: 300,
      autoFitColumnsOnFirstLoad: false,
      enableAutoSizeColumns: false,
      autosizeColumnsByCellContentOnFirstLoad: true,
      enableAutoResizeColumnsByCellContent: true
    };
    this.CDAccounts.push({id: 'NumeCuent', name:'Número', field: 'NumeCuen', sortable: true, filterable: true});
    this.CDAccounts.push({id: 'NombCuent', name:'Nombre', field: 'NombCuen', sortable: true, filterable: true});


    console.log('ngOnInit');

  }

  fnGetAccounts(){
    this.data.fnGetAccounts(this.service.lstrUser).subscribe({next: res => {
        this.accounts = res;
        this.dsAccounts = res;
    }})
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void{
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  fnSaveAccount(){

    if(this.lstrNombreCuenta == "" ){
      this.mensaje = "Nombre de cuenta está vacia"
      return;
    }

    if(this.lstrNumeroCuenta == "" ){
      this.mensaje = "Numero de cuenta está vacia"
      return;
    }

    this.bPreguntar = true;

    this.subscription = this.service.ResObserver$.subscribe((res: any) => {
      this.subscription.unsubscribe();
      this.bPreguntar = false;
        if(res == "Sí"){
          this.fnDoSaveAccount();
        }
    }
    );
  }

  fnDoSaveAccount(){
    this.data.fnSaveAccount(this.service.gCodUser, this.lstrNombreCuenta, this.lstrNumeroCuenta).subscribe({next: res => {


      if(res[0].Status != 'Error'){
        this.mensaje = "Guardado Correctamente"
      }else{
        this.mensaje = "Error:" + res[0].Error;
      }

      this.accounts = res;
      this.dsAccounts = res;
      this.lstrUser = this.service.gCodUser;
      this.fnGetAccounts();
  }})
    
  }


}
