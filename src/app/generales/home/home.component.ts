import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  lbolUserLogu: boolean = false;

  fecha = new Date();
  numValor: number = 123456789;
  numPerc: number = 0.87654;
  strTexto: string = 'Hoy es una clase'

  public lSubscription: Subscription = new Subscription;

  constructor(private service: ServiceService){}

  fnActiveObserver(){
    this.lSubscription = this.service.ResObserver$.subscribe((res: any) =>{
      this.lSubscription.unsubscribe();
      console.log(res);
    });
  }

  fnTestObserver(){
    setTimeout(() => {
      console.log('Fin del time out')
      this.service.fnSetObserver('Fin del time out. Simulacion de accion del usuario o trigegr')
    }, 5000);
  }

  
}
