export interface Transactions { 
  amount: number,
  concept: string, // "Pago de honorarios"
  date: string,    // "2022-10-26 15:00:00"
  type: string,    // "topup|payment"
  accountId: number,
  userId: number,
  to_account_id: number
}

export interface listTransaction {

  id: number,
  amount: string,
  concept: string,
  date: string,         // "2022-11-07T23:11:20.000Z"
  type: string,         // "payment|topup"
  accountId: number,
  userId: number,
  to_account_id: number,
  createdAt: string,    // "2022-11-08T02:11:33.000Z"
  updatedAt: string,    // "2022-11-08T02:11:33.000Z"

}

