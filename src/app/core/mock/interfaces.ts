export interface Accounts {
  creationDate: string;
  money: number;
  isBlocked: boolean;
  userId: number;
}
export const cuenasBancarias: Accounts[] = [
  {
    creationDate: '2022-06-20',
    money: 1300,
    isBlocked: false,
    userId: 993,
  },
  {
    creationDate: '2022-07-20',
    money: 1200,
    isBlocked: false,
    userId: 2,
  },
  {
    creationDate: '2020-06-20',
    money: 1000,
    isBlocked: false,
    userId: 3,
  },
  {
    creationDate: '2022-06-20',
    money: 500,
    isBlocked: false,
    userId: 4,
  },
  {
    creationDate: '2022-06-20',
    money: 1200,
    isBlocked: false,
    userId: 5,
  },
];
