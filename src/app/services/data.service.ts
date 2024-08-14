import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //apiUrl: string = 'https://erpapipruebas.azurewebsites.net/api/';

  apiUrlValiUser: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiuser';
  apiUrlGetAccounts: string = 'https://erpapipruebas.azurewebsites.net/api/values/GetAccounts';

  apiUrlSignUp: string = 'https://erpapipruebas.azurewebsites.net/api/values/signup';

  //Función para validar un usuario

  apiUrlValiProf: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiprof';

  apiUrlSaveAccount: string = 'https://erpapipruebas.azurewebsites.net/api/values/SaveAccount';


  apiUrlSaveTransactions: string = 'https://erpapipruebas.azurewebsites.net/api/values/SaveTran';


  fnValiUser(CodiUser: string, PassUser: string): Observable<any>{

    let UserInfo: any[] = [];
    UserInfo.push({'CodiUser':CodiUser, 'PassUser': PassUser});

    return this.http.post(this.apiUrlValiUser,UserInfo,httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }


  fnGetAccounts(CodiUser: string): Observable<any>{
    let User: any[]=[];
    User.push({'CodiUser':CodiUser});

    return this.http.post(this.apiUrlGetAccounts,User,httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }

  fnValidProfile(CodiUser: string){
    let UserInfo: any[] = [];
    UserInfo.push({'CodiUser':CodiUser});

    return this.http.post(this.apiUrlValiProf,UserInfo,httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }


  fnSignUp(CodiUser: string, nombreUser: string, password: string){
    let UserInfo: any[] = [];
    UserInfo.push({'CodiUser':CodiUser, "NombUser": nombreUser, "PassUser": password});

    return this.http.post(this.apiUrlSignUp,UserInfo,httpOptions).pipe(tap((res: any) => {
      console.log(res);
      return res;
    }));
  }

fnSaveAccount(CodiUser: string, nombreCuen: string, numbeCuen: string){

  let AccountInfo: any[] = [];
  AccountInfo.push({'CodiUser':CodiUser, "NombCuen": nombreCuen, "NumeCuen": numbeCuen});

  return this.http.post(this.apiUrlSaveAccount,AccountInfo,httpOptions).pipe(tap((res: any) => {
    console.log(res);
    return res;
  }));

}

fnSaveTransaction(type: string, numeroCuenta: string, amount: string, categoria: string, descripcion: string, estado: string){

  let TransactionInfo: any[] = [];
  TransactionInfo.push({
    'Type': type,
    'NumeCuen': numeroCuenta,
    'Amount': amount,
    'Categoria': categoria,
    'Descripcion': descripcion,
    'Estado': estado,
    });

  return this.http.post(this.apiUrlSaveTransactions,TransactionInfo,httpOptions).pipe(tap((res: any) => {
    console.log(res);
    return res;
  }));

}

}
