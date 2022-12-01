import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { newBankAccount, BankAccount } from '@core/model/bank-account.interface';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  apiUrl = environment.apiBase;
  constructor(
    private http: HttpClient
  ) { }

  newBAccount(account: newBankAccount) {
    const resp = this.http.post(`${this.apiUrl}/accounts`, account).subscribe(data => (data))
    return resp
  }

  BAccountsMe (): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.apiUrl}/accounts/me`)
  }
}
