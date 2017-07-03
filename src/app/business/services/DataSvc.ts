import { Injectable } from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';
'use strict';

@Injectable()
export class DataSvc {
    getData(count: number): wjcCore.ObservableArray {
            var countries = '中国,加拿大,美国,澳大利亚,法国,英国'.split(','),
                data = new wjcCore.ObservableArray();
            for (var i = 0; i < count; i++) {
                data.push({
                    id: i,
                    country: countries[i % countries.length],
                    date: new Date(2017, i % 12, i % 28),
                    amount: Math.random() * 10000,
                    active: i % 4 == 0
                });
            }
            return data;
    }
}
