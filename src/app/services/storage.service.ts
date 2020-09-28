/*
 * @Author: your name
 * @Date: 2020-09-24 19:27:51
 * @LastEditTime: 2020-09-24 19:51:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/app/services/storage.service.ts
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // tslint:disable-next-line:typedef
  get(){
    return 'this is a service';
  }
}
