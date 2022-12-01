import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { TransactionsComponent } from '@shared/components/formTransactions/transactions.component';
import { Accounts } from '@core/mock/interfaces';
import { newBankAccount, BankAccount } from '@core/model/bank-account.interface';
import { BankAccountService } from '@core/services/banco/bank-account.service';
import { formatDate } from '@angular/common';
import { UserDataService } from '@core/services/user-data.service';
import { FormEndPointTransactionComponent } from '@shared/components/formEndPointTransaction/form-end-point-transaction.component';

@Component({
  selector: 'ab-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss'],
})
export class BankAccountComponent implements OnInit {
  @Input() userId!: number;
  @Input() dataUser:any
  openTab = 1;
  hideCurrency: boolean = false;
  transacciones: any;
  plazos: any;
  resultado!:number;
  ListBankAccounts: BankAccount[] = [];
  money:any
  objetoDinero:any
  cuentaResultado:any

  constructor(
    public dialog: MatDialog,
    private modalSS: TransactionsService,
    private bankAccountService: BankAccountService,
    private user: UserDataService
  ) {}

  //MODAL//
  modalRecargar() {
    this.modalSS.$modal.emit(true);
    this.dialog.open(TransactionsComponent);
  }

  modalTransferir() {
    this.dialog.open(FormEndPointTransactionComponent)
  }

  ngOnInit(): void {
    // this.transaccionesS();
    this.getPlazos();
    this.getBankAccounts()
  }

  getPlazos() {
    this.user.getFixedDeposits().subscribe((list: any) => {
      const { data } = list;
      this.plazos = data;
      this.plazos = this.plazos.forEach((cuenta:any) => {
        const {amount, id} = cuenta
        Number(this.objetoDinero = {amount, id})
       })

    });
  }


  getMoneyAccount() {
    this.bankAccountService.BAccountsMe().subscribe((list: any) => {
    })
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  showCurrencyFn() {
    this.hideCurrency = !this.hideCurrency;
  }


  addBankAccount() {
    const newAccountData: newBankAccount = {
      creationDate: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss' , 'en'),
      money: 0,
      isBlocked: false,
      userId: this.userId
    }
    this.bankAccountService.newBAccount(newAccountData)
  }

  getBankAccounts() {
    this.bankAccountService.BAccountsMe().subscribe((data: any) => {
      this.ListBankAccounts = data
      this.objetoDinero = this.ListBankAccounts.forEach((cuenta:any) => {
        const {money, id} = cuenta
        Number(this.money = {money, id})
       })
    })
  }


}
