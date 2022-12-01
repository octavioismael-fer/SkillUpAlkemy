import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { listTransaction } from '@core/model/interfacesTransactions';
import { TransactionsService } from '@core/services/banco/transactions.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Transaction from '../../../../../../core/state/user-actions/transactions.actions';
import * as SelectTransaction from '../../../../../../core/state/user-selectors/Transaction.Selectors';


@Component({
  selector: 'ab-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsComponent implements OnInit {

  displayedColumns: string[] = [ 'type','accountId','amount','concept','date','accion'];
  dataSource :any = []

  TransactionList$: Observable<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public ssTransaction:TransactionsService, private store: Store<any>) {
    this.TransactionList$ = this.store.select(SelectTransaction.dataTransaction)
    this.store.dispatch(Transaction.allTransaction())

}

  ngOnInit(): void {
    this.toListTransaction()

  }




  toListTransaction(){
    this.ssTransaction.getListTransaction().subscribe((list:any)=>{

    const {data} = list
    let dataArreglo

    this.dataSource = new MatTableDataSource(data)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
