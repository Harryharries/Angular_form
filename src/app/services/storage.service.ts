/*
 * @Author: your name
 * @Date: 2020-09-24 19:27:51
 * @LastEditTime: 2020-09-24 19:51:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/app/services/storage.service.ts
 */
import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }
  // tslint:disable-next-line:typedef
  get(key){
    return JSON.parse(localStorage.getItem(key));
    // return 'this is a service';
  }
  remove(key){
    localStorage.removeItem(key);
  }

  getRxjsData(){
    return new Observable((observer)=>{
      setTimeout(() => {
        var username = 'harrrryyy';
        observer.next(username);
        // observer.error("error")
      }, 1200);

    })
  }
}
