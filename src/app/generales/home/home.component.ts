import { Component } from '@angular/core';

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
  
}
