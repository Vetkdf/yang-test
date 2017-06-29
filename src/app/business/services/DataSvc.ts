import { Injectable } from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';
'use strict';

@Injectable()
export class DataSvc {

    getData(count: number): wjcCore.ObservableArray {
            var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
                data = new wjcCore.ObservableArray();
            for (var i = 0; i < count; i++) {
                data.push({
                    id: i,
                    country: countries[i % countries.length],
                    date: new Date(2014, i % 12, i % 28),
                    amount: Math.random() * 10000,
                    active: i % 4 == 0
                });
            }
            return data;
    }
}
