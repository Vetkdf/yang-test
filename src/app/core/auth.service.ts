import { Injectable,Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import ConstantsList from '../common/constants/config';
import { Auth ,User } from '../module/login/entity';
import { BackNewsCode } from '../module/business/formdata';
import { BaseService } from '../common/services/base.service';

@Injectable()
export class AuthService extends BaseService {

  //constructor(private http: Http,@Inject('user') private userService) {
  constructor(private http: Http) {
    super();
    this.servicename = 'AuthService-用户服务';
  }

  public loginWithCredentials(username: string, password: string): Promise<Auth> {
    //return this.userService
    return this.findUserBySSM(username,password)
      .then(backCode => {
        let auth = new Auth();
        switch(backCode.backCode){
          case 0:
            auth.hasError = true;
            auth.errMsg = '没有这个用户';
          break;
          case 1:
            sessionStorage.removeItem('userId');
            sessionStorage.setItem('userId',String(backCode.Id));
            auth.redirectUrl = (sessionStorage.getItem('redirectUrl') === null)? '/': sessionStorage.getItem('redirectUrl');
            auth.hasError = false;
          break;
          case 2:
            auth.hasError = true;
            auth.errMsg = '密码错误';
          break;
          default:
            auth.hasError = true;
            auth.errMsg = 'Http状态错误';
          break;
        }
        return auth;
      })
      .catch((error: any) => {this.handleError('loginWithCredentials',error);});
  }

  private findUserBySSM(username: string,password:string): Promise<BackNewsCode> {
    const url = `${ConstantsList.HOSTUser}yang-test/angular/login/${username}/${password}/`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let status:number = res.status;//SSM框架返回的状态
                if(status === 200) { //服务端正确执行
                  return res.json() as BackNewsCode;
                }
                else {
                  var backCode:BackNewsCode = new BackNewsCode();
                  backCode.backCode = 3;
                  backCode.Id = 0;
                  return backCode;
                }
              })
              .catch((error: any) => {this.handleError('findUserBySSM',error);});
  }
}
