import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  lstrColor: string = 'white';

  codiUSer: string = "";
  codiUSer2: string = "";
  nombreUser: string = "";
  password: string = "";

  constructor(private data: DataService){}


  ngOndestory(): void{
    console.log("onDestory");
  }


  fnGetAccounts(){
    this.data.fnGetAccounts('Pedro').subscribe({next: res => {
        console.log(res);
    }})
  }

  fnFondoBlanco(){
    this.lstrColor = 'white';
  }

  fnFondoAzul(){
    this.lstrColor = 'blue';
  }

  fnValidProf(){
    this.data.fnValidProfile(this.codiUSer).subscribe(
      {next: res => {
        this.nombreUser = res[0].nombreUser
        this.password = res[0].password
        console.log(res);
      }
      }
    );
  }

}
