import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listTransaction, Transactions } from '@core/model/interfacesTransactions';
import { Observable } from 'rxjs';
import { outputAst } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  URLtransactions = "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions"

  constructor(private http:HttpClient) { }

  $modal = new EventEmitter <boolean> ();



  postTransaction(transaction:Transactions):Observable<Transactions>{
    return this.http.post<Transactions>(this.URLtransactions, transaction)
  }

  getListTransaction():Observable<listTransaction>{
    return this.http.get<listTransaction>(this.URLtransactions)
  }

}
