import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './services/data.service';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mi aplicación bancaria';

  lbolUserLogu: boolean = false;
  lstrUser: string = 'Robin';
  lstrPass: string = '1234';
  lstrMessag: string = '';
  lbolUseLogTem: boolean = false;

  constructor(private apiService: DataService, public service: ServiceService, private router: Router){}

  ngDoCheck(): void{
    console.log('docheck');
    this.lbolUserLogu = this.lbolUseLogTem;
  }

  fnLogIN(){
    this.apiService.fnValiUser(this.lstrUser,this.lstrPass).subscribe({next: res =>{
      if (res[0].Status == 'OK'){
        //this.lbolUserLogu = true;
        this.lbolUseLogTem = true;
        this.lstrMessag = '';
        this.service.lstrUser = this.lstrUser;
        this.router.navigate(['home']);
        this.service.gCodUser = this.lstrUser;
      }else{
        this.lbolUserLogu = false;
        this.lstrMessag = res[0].NombUsua;
      }
    }});
  }

  fnLogOut(){
    this.lbolUseLogTem = false;
  }

  fnSignUp(){
    this.service.lbolSignUp = true;
  }
}
