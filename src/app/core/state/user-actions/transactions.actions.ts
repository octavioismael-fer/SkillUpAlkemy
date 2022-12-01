import { Transactions } from './../../model/user.data';
import { createAction, props } from "@ngrx/store";


export const addTransaction = createAction(
  '[Transaction] Add Transaction',
  props<{ addTransaction: Transactions[] }>()
);

export const allTransaction = createAction('[Transaction] Get All Transaction');

export const detailTransaction = createAction(
  '[Transaction] Get Detail Transaction',
  props<{ detailTransaction: Transactions }>()
);

export const putTransaction = createAction(
  '[Transaction] Put Transaction',
  props<{ putTransaction: Transactions }>()
);

export const deleteTransaction = createAction(
  '[Transaction] Delete Transaction',
  props<{ deleteTransaction: Transactions }>()
);

