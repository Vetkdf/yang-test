import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import ConstantsList from '../../common/constants/config';
import { QmAngular,BackCode } from '../../module/formdata';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  AddForm(postvalue: string): Promise<BackCode> {
    let url = `${ConstantsList.HOSTUser}AddForm.ashx`;

    //let body = JSON.stringify(postvalue);
    let body = postvalue;

    //let headers = ConstantsList.headers;
    //let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' });
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, body, options)
    .toPromise().
    then((res) => {
        return res.json() as BackCode;
    })
    .catch(this.handleError);
  }

  AddFormSSM(postvalue: QmAngular): Promise<BackCode> {
    let url = `${ConstantsList.HOSTUser}yang-test/angular/addfrom/`;
    //let body = JSON.stringify(postvalue);//这个也可以
    let body = postvalue;//这个可以
    let headers = ConstantsList.headers;//spring的restful接口用这个
    // ashx后台页面用这个
    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, body, options)
    .toPromise()
    .then((res) => {
        return res.json() as BackCode;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
