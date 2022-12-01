import { Transactions } from './../../model/user.data';


import { UserDataService } from './../../services/user-data.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as Transaction from '../user-actions/transactions.actions';
import { concatMap, map, catchError, switchMap } from 'rxjs';
import { TransactionsService } from '@core/services/banco/transactions.service';


@Injectable()
export class TransactionsEffects {

  allTransaction$ = createEffect (() => {
    return this.action$.pipe(
      ofType(Transaction.allTransaction),
      concatMap(() => {
        return this.ssTransaction.getListTransaction().pipe(
          map((transaction) => {
            return console.log(transaction)
          })
        )
      })
    )
  },
  {dispatch: false})

  constructor(private action$: Actions, private dataService: UserDataService, private ssTransaction: TransactionsService) {}

}
