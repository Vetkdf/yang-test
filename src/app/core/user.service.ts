import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../module/entity';
import { BackNewsCode } from '../module/formdata';
import ConstantsList from '../common/constants/config';

@Injectable()
export class UserService  {

  constructor(private http: Http) {}

  findUserBySSM(username: string,password:string): Promise<BackNewsCode> {
    const url = `${ConstantsList.HOSTUser}yang-test/angular/login/${username}/${password}/`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let status:number = res.status;//SSM框架返回的状态
                if(status === 200){ //服务端正确执行
                  return res.json() as BackNewsCode;
                }
                else
                {
                  let backCode:BackNewsCode = new BackNewsCode();
                  backCode.backCode = 3;
                  return backCode;
                }
              })
              .catch(this.handleError);
              // use bad,  my crying .angular4.2.4 
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
