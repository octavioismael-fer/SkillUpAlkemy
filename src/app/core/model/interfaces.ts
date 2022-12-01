export interface UserAuth {
    email:string,
    password:string
}

export interface User {
    id:number,
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    roleId: number;
    points: number;
}
export interface UserRegister {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface AccessToken {
  user: string;
}
