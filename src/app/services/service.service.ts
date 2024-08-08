import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  lbolSignUp: boolean = false;
  lstrUser: string = '';
  gCodUser: string = ' ';

  private ResSubject = new Subject<any>();
  public ResObserver$ = this.ResSubject.asObservable();


  constructor() { }

  fnSetObserver(pvstrObserver: any){
    this.ResSubject.next(pvstrObserver);
  }

}
