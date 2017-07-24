import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class BaseService {

  protected servicename:string;

  protected handleError(functionName:string,error: any): Promise<any> {
    console.error(`服务 : ${this.servicename} , 函数 : ${functionName} 。发生错误 : `, error);
    return Promise.reject(error.message || error);
  }

}
