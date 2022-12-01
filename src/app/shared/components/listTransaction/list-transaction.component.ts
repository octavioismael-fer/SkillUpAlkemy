import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '@core/services/banco/transactions.service';

@Component({
  selector: 'ab-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss']
})
export class ListTransactionComponent implements OnInit {

  constructor(public ssTransaction:TransactionsService) { }

  listTransaction:any

  ngOnInit(): void {
   // this.toListTransaction()
  }

  toListTransaction(){
    this.ssTransaction.getListTransaction().subscribe((list:any)=>{


    const {data} = list
    this.listTransaction=data

    })
  }
}
