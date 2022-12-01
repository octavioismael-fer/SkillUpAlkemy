import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { Transactions } from '@core/model/interfacesTransactions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseServicesService } from '@core/services/base-service';
import { User } from '@core/model/interfaces';
import { UserDataService } from '@core/services/user-data.service';
import { BankAccountService } from '@core/services/banco/bank-account.service';
import { Accounts, TransferAccount } from '@core/model/user.data';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Component({
  selector: 'ab-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() cuentaId:number = 0


  Transferencias:Transactions[] = []
  enviarDinero!: FormGroup;

  correspondeIngreso:any;
  idMonto: any;
  fecha:string = ''
  hourAndDate:string=""
  UserID!:number
  banco:any
  dialog: any;
  cuentas:any
  constructor(
    private formBuilder: FormBuilder,
    private base:BaseServicesService,
    private bankAccountService: BankAccountService,
    private userData:UserDataService,
    private http:HttpClient,
    private modal:TransactionsService
    ) { }


    dataUsuario:User = {
      id:0,
      first_name: "string",
      last_name: "string",
      email: "string",
      password: "string",
      roleId: 0,
      points: 0,
      }

  ngOnInit(): void {
    this.enviarDinero = this.formBuilder.group({
      amount:['', [Validators.required]],
      type:['', [Validators.required]],
      concept:['', [Validators.required]]
    })


    this.getAccount()


  }
  getAccount(){
    this.bankAccountService.BAccountsMe().subscribe(data =>{
      this.banco = data

    })
  }



  sendmoney(){
    const { type, concept, amount } = this.enviarDinero.value;
    const formData: TransferAccount = {
      type: type,
      concept: concept,
      amount: amount,
    };
       this.userData.postAccountsId(1, formData).subscribe(data => {
        this.UserID = this.cuentaId
       })

  }


  obtener(){

    return this.http.post(
      `${environment.apiBase}/accounts/214`,
      {
        "type": this.enviarDinero.value.type,
        "concept": this.enviarDinero.value.concept,
        "amount": this.enviarDinero.value.amount
      }).subscribe(data => {       

      })

    }

}






