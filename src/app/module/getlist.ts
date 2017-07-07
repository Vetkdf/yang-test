import * as wjcCore from 'wijmo/wijmo';

export class PageBackList{
    pageNews:number[];
    pageBackContent:any[];
}

export class Wijmo_PageBackList{
    pageNews:number[];
    List:wjcCore.ObservableArray;
}

//=================================================

export class PageBackContentSSM{
    id:number;
    province:string;
    city:string;
    area:string;
}

export class PageBackContent_M2V2{
    id:number;
    indexcode:string;
    indexname:string;
    indexremark:string;
    isdel:number;
    isdelandedit:number;
}

export class PageBackContent_M2V3{
    id:number;
    indexcode:string;
    code:string;
    name:string;
    workid:number;
    worktime:number;
    remark:string;
    isdel:number;
    isdelandedit:number;
    lastworkid:number;
    updatetime:number;
    orderid:number;
}

//=================================================

export class BackNews {
  backNews:string;
}
