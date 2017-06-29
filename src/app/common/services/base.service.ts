import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService {

  servicename:string;

  constructor(servicename:string,) {
    this.servicename=servicename;
  }

  public handleError(error: any): Promise<any> {
    //console.error(`服务${this.servicename}发生错误 : `, error);
    console.error(`服务发生错误 : ` + this.servicename, error);
    return Promise.reject(error.message || error);
  }

}
