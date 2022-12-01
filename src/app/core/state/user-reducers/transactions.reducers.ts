import { createReducer, on } from '@ngrx/store';
import { Transactions } from './../../model/user.data';
import * as Transaction from '../user-actions/transactions.actions';


export interface TransactionReducer {
  transaction: Transactions[]
}

export const initialTransactionState: TransactionReducer = {
  transaction: []
}

export const TrasactionReducer = createReducer(
  initialTransactionState,
  on(Transaction.addTransaction, (state, action): TransactionReducer => { return {...state.transaction, transaction: action.addTransaction}}),
  on(Transaction.allTransaction, (state): TransactionReducer => { return {...state }} ),
  on(Transaction.detailTransaction, (state, action): TransactionReducer => { return {...state, transaction: state.transaction.filter((transaction) => transaction.userId !== action.detailTransaction.userId)}}),
  on(Transaction.putTransaction, (state, action): TransactionReducer => { return {...state, transaction: state.transaction.filter((transaction) => transaction.userId !== action.putTransaction.userId)}}),
  on(Transaction.deleteTransaction, (state, action): TransactionReducer => { return {...state, transaction: state.transaction.filter((transaction) => transaction.userId !== action.deleteTransaction.userId)}})
)
