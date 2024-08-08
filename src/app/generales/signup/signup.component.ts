import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Data } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  codiUser: string = "";
  nombreUser: string = "";
  password: string = "";
  lblMensaje: string ="";

  constructor(public service: ServiceService, private dataService: DataService){}



  fnCancelSignUp(){
    this.service.lbolSignUp = false;
  }

  fnSignUp(){
    this.dataService.fnSignUp(this.codiUser, this.nombreUser, this.password).subscribe({
      next: res => {
        // == compara valor
        // ==== compara tipo de variable
        if(res[0].Status == 'OK'){
          console.log('Exitoso');
          this.lblMensaje = "Registro Almacenado con Exito!"
        }else{
          console.log('Fallido');
          this.lblMensaje = "Registro Fallido" + res[0].Error;
        }
      },
    });
  }
}
