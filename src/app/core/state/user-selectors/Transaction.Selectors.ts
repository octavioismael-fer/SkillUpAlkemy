import { listTransaction } from "@core/model/interfacesTransactions"
import { createFeatureSelector, createSelector } from "@ngrx/store"

const TransactionState = createFeatureSelector<listTransaction>('UserDataFeatureKey')

export const dataTransaction = createSelector(
  TransactionState,
  (TransactionState) => `${TransactionState.userId} ${TransactionState.amount}`
)
