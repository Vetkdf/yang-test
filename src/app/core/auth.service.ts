import { Injectable,Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import ConstantsList from '../common/constants/config';
import { Auth ,User } from '../module/entity';
import { BackNewsCode } from '../module/formdata';

@Injectable()
export class AuthService {

  constructor(private http: Http,@Inject('user') private userService) {}

  loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.userService
      .findUserBySSM(username,password)
      .then(backCode => {
        let auth = new Auth();
        sessionStorage.removeItem('userId');
        let redirectUrl = (sessionStorage.getItem('redirectUrl') === null)? '/': sessionStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;
        
        if (backCode.backCode === 0){
          auth.hasError = true;
          auth.errMsg = '没有这个用户';
        } else if (backCode.backCode === 1) {
          /*
          let user:User = new User();
          user.id = backCode.id;
          user.username = username;
          user.password = password;
          auth.user = Object.assign({}, user);
          */

          auth.hasError = false;
          sessionStorage.setItem('userId',backCode.id);
        } else if(backCode.backCode === 2){
          auth.hasError = true;
          auth.errMsg = '密码错误';
        }
        else{
          auth.hasError = true;
          auth.errMsg = 'Http状态错误';
        }
        return auth;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
