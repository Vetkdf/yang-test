import { Injectable } from '@angular/core';
import { Http, Headers, Response ,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PageBackList,Wijmo_PageBackList,PageBackContentSSM, PageBackContent_M2V2,PageBackContent_M2V3,BackNews} from '../../module/business/getlist';
import ConstantsList from '../../common/constants/config';
import * as wjcCore from 'wijmo/wijmo';
import { BackCode } from '../../module/business/formdata';
import { BaseService } from '../../common/services/base.service';
'use strict';

@Injectable()
export class GetList extends BaseService {

  constructor(private http: Http) {
    super();
    this.servicename = 'GetList-列表服务';
  }

  public GetListPageBySSM(PageIndex:number,PageSize:number): Promise<Wijmo_PageBackList>{
    const url = `${ConstantsList.HOSTUser}yang-test/angular/pagelist/${PageIndex}/${PageSize}/`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let status:number = res.status;
                if(status === 200){
                  let PB:PageBackList = res.json() as PageBackList;
                  let PBC:PageBackContentSSM[]  = PB.pageBackContent as PageBackContentSSM[];
                  let Wijmo:Wijmo_PageBackList = new Wijmo_PageBackList();
                  Wijmo.List = new wjcCore.ObservableArray();
                  for (let i = 0; i < PBC.length; i++) {
                      Wijmo.List.push({
                          ID: PBC[i].id,
                          P:  PBC[i].province,
                          C:  PBC[i].city,
                          A:  PBC[i].area,
                      });
                  }
                  Wijmo.pageNews = PB.pageNews;
                  return Wijmo;
                }
                else{
                  console.error('服务端返回的 http status 错误 : ', status);
                  return null;
                }
              })
              .catch((error: any) => {this.handleError('GetListPageBySSM',error);});
  }

  public GetListPageBy_M2V2(PageIndex:number): Promise<Wijmo_PageBackList>{
    const url = `${ConstantsList.HOSTUser}/yang-test/angular/getbnindex/${PageIndex}/${ConstantsList.pageSize}/`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let status:number = res.status;
                if(status === 200){
                  let PB:PageBackList = res.json() as PageBackList;
                  let PBC:PageBackContent_M2V2[]  = PB.pageBackContent as PageBackContent_M2V2[];
                  let Wijmo:Wijmo_PageBackList = new Wijmo_PageBackList();

                  Wijmo.List = new wjcCore.ObservableArray();
                  for (let i = 0; i < PBC.length; i++) {
                      Wijmo.List.push({
                          check:false,
                          id: PBC[i].id,
                          indexcode: PBC[i].indexcode,
                          indexname: PBC[i].indexname,
                          indexremark: PBC[i].indexremark,
                          //isdel: PBC[i].isdel === 0 ? '启用':'禁用',
                          //isdelandedit: PBC[i].isdelandedit === 0 ? '可编辑':'已锁定',
                          isdel: PBC[i].isdel,
                          isdelandedit:PBC[i].isdelandedit,
                          button:PBC[i].id,
                      });
                  }
                  Wijmo.pageNews = PB.pageNews;
                  return Wijmo;
                }
                else{
                  console.error('服务端返回的 http status 错误 : ', status);
                  return null;
                }
              })
              .catch((error: any) => {this.handleError('GetListPageBy_M2V2',error);});
  }

  public GetListPageBy_M2V3_List(): Promise<PageBackContent_M2V2[]>{
    const url = `${ConstantsList.HOSTUser}/yang-test/angular/getbnindexlist/`;
    return this.http.get(url)
              .toPromise()
              .then(res => {  return res.json() as PageBackContent_M2V2[]; })
              .catch((error: any) => {this.handleError('GetListPageBy_M2V3_List',error);});
  }

  public GetListPageBy_M2V3(PageIndex:number,Type:string): Promise<Wijmo_PageBackList>{
    const url = `${ConstantsList.HOSTUser}/yang-test/angular/getbasenews/${PageIndex}/${ConstantsList.pageSize}/${Type}/`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let status:number = res.status;
                if(status === 200){
                  let PB:PageBackList = res.json() as PageBackList;
                  let PBC:PageBackContent_M2V3[] = PB.pageBackContent as PageBackContent_M2V3[]
                  let Wijmo:Wijmo_PageBackList = new Wijmo_PageBackList();

                  Wijmo.List = new wjcCore.ObservableArray();
                  for (let i = 0; i < PBC.length; i++) {
                      Wijmo.List.push({
                          check:false,
                          id: PBC[i].id,
                          indexcode: PBC[i].indexcode,
                          code: PBC[i].code,
                          name: PBC[i].name,
                          //workid: PBC[i].workid,
                          //worktime: PBC[i].worktime,
                          remark: PBC[i].remark,
                          //lastworkid: PBC[i].lastworkid,
                          //updatetime: PBC[i].updatetime,
                          orderid: PBC[i].orderid,
                          isdel: PBC[i].isdel,
                          isdelandedit: PBC[i].isdelandedit,
                          //isdel: PBC[i].isdel === 0 ? '启用':'禁用',
                          //isdelandedit: PBC[i].isdelandedit === 0 ? '可编辑':'已锁定',
                          button:PBC[i].id,
                      });
                  }
                  Wijmo.pageNews = PB.pageNews;
                  return Wijmo;
                }
                else{
                  console.error('服务端返回的 http status 错误 : ', status);
                  return null;
                }
              })
              .catch((error: any) => {this.handleError('GetListPageBy_M2V3',error);});
  }

  //======================================================

  public GetSequenceCode(Type:number,IsAdd:number):Promise<string> {
    const url = `${ConstantsList.HOSTUser}/yang-test/angular/getsequencecode/${Type}/${IsAdd}/`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let status:number = res.status;
                if(status === 200){
                  let Back = res.json() as BackNews;
                  return Back.backNews;
                }
                else{
                  console.error('服务端返回的 http status 错误 : ', status);
                  return null;
                }
              })
              .catch((error: any) => {this.handleError('GetSequenceCode',error);});
  }

  //======================================================

  public Form_M2V2(postvalue:PageBackContent_M2V2,IsAdd:boolean): Promise<BackCode> {
    const url = `${ConstantsList.HOSTUser}/yang-test/angular/form_m2v2/`;
    let headers = ConstantsList.headers;
    let options = new RequestOptions({ headers: headers });
    if(IsAdd) {
      return this.http.post(url, postvalue, options).toPromise()
      .then((res) => { return res.json() as BackCode; })
      .catch((error: any) => {this.handleError('Form_M2V2',error);});
    }
    else {
      return this.http.put(url, postvalue, options).toPromise()
      .then((res) => { return res.json() as BackCode; })
      .catch((error: any) => {this.handleError('Form_M2V2',error);});
    }
  }

  public Form_M2V3(postvalue:PageBackContent_M2V3,IsAdd:boolean): Promise<BackCode> {
    const url = `${ConstantsList.HOSTUser}/yang-test/angular/form_m2v3/`;
    let headers = ConstantsList.headers;
    let options = new RequestOptions({ headers: headers });
    if(IsAdd) {
      return this.http.post(url, postvalue, options).toPromise()
      .then((res) => { return res.json() as BackCode; })
      .catch((error: any) => {this.handleError('Form_M2V3',error);});
    }
    else {
      return this.http.put(url, postvalue, options).toPromise()
      .then((res) => { return res.json() as BackCode; })
      .catch((error: any) => {this.handleError('Form_M2V3',error);});
    }
  }

}
