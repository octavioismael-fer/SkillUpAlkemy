// Accounts

export interface Accounts {
  id:number,
  creationDate: Date,
  money : number,
  isBlocked: boolean,
  userId: number
}

export interface TransferAccount {
  type: string,
  concept: string,
  amount: number
}

export interface Transactions {
  amount: number,
  concept: string,
  date: Date,
  type: string | string,
  accountId: number,
  userId: number,
  to_account_id: number
}

export interface FixedTerms {
  userId: number,
  accountId: number,
  amount: number,
  creation_date: Date,
  closing_date: Date
}
export interface FixedDepositCreated {
  id: number;
  userId: number;
  accountId: number;
  amount: number;
  creation_date: Date;
  closing_date: Date;
  updatedAt: Date;
  createdAt: Date;
}
export interface ResponseFixedDeposits {
  previousPage: null,
  nextPage: null,
  data: FixedDepositCreated[]
}
