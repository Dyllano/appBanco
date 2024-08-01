import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  lstrColor: string = 'white';

  constructor(private data: DataService){}

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

}
