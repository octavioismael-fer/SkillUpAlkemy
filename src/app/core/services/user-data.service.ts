import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Accounts,
         Transactions,
         TransferAccount,
         FixedTerms,
       } from '@core/model/user.data';
import { User } from '@core/model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private baseUrl = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAuthMe(user: User): Observable<User[]> {
    const url = `${this.baseUrl}/auth/me`
    return this.http.post<User[]>(url, user)
  }

  // Accounts

  postAccounts(CreateAccounts: Accounts): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts`
    return this.http.post<Accounts>(url, CreateAccounts)
  }

  getAccounts(): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts`
    return this.http.get<Accounts>(url)
  }

  postAccountsId(id: number, cuenta:TransferAccount): Observable<TransferAccount> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.post<TransferAccount>(url, {cuenta})
  }

  getAccountsId(id: number): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.get<Accounts>(url)
  }

  putAccounts(id: number): Observable<Accounts> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.put<Accounts>(url, {id})
  }

  deleteAccounts(id: number): Observable<any> {
    const url = `${this.baseUrl}/accounts/${id}`
    return this.http.delete<any>(url)
  }

  //Transaction

  postTransactions(Transactions: Transactions): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions`
    return this.http.post<Transactions>(url, Transactions)
  }

  getTransactions(): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions`
    return this.http.get<Transactions>(url)
  }


  getTransactionsId(id: number): Observable<any> {
    const url = `${this.baseUrl}/transactions/${id}`
    return this.http.get<any>(url)
  }

  putTransactions(id: number): Observable<any> {
    const url = `${this.baseUrl}/transactions/${id}`
    return this.http.put<any>(url, id)
  }

  deleteTransactions(id: number): Observable<Transactions> {
    const url = `${this.baseUrl}/transactions/${id}`
    return this.http.delete<Transactions>(url)
  }

  //Fixed Terms Deposit

  postFixedDeposits(FixedTerms: FixedTerms): Observable<FixedTerms> {
    const url = `${this.baseUrl}/fixedDeposits`
    return this.http.post<FixedTerms>(url, FixedTerms)
  }

  getFixedDeposits(): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits`
    return this.http.get<any>(url)
  }

  getFixedDepositsId(id: number): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits/${id}`
    return this.http.get<any>(url)
  }

  putFixedDeposits(id: number): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits/${id}`
    return this.http.put<any>(url, {id})
  }

  deleteFixedDeposits(id: number): Observable<any> {
    const url = `${this.baseUrl}/fixedDeposits/${id}`
    return this.http.delete<any>(url)
  }

}
