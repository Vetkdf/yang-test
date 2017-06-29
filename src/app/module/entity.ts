
//用户信息实体类
export class User{
  id:number;
  username:string;
  password:string;
}

//登录信息实体类
export class Auth {
  user: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}
