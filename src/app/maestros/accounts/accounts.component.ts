import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  constructor(private data: DataService, private service: ServiceService){}

  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];

  accounts: any[] = [];

  lstrUser: string ="";


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


}
