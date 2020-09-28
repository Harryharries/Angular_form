/*
 * @Author: your name
 * @Date: 2020-09-24 10:29:05
 * @LastEditTime: 2020-09-24 19:58:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/app/components/form/form.component.ts
 */
import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';

// const storage = new StorageService();

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public peopleInfo: any = {
    username: '111',
    sex: '1',
    cityList: ['beijing', 'toranto', 'van'],
    city: 'van',
    hobby: [
      {
        title: 'eat',
        checked: false,
      },
      {
        title: 'sleep',
        checked: false,
      },
      {
        title: 'coding',
        checked: true,
      },
    ],
  };

  constructor(public storage: StorageService) {

    const s = this.storage.get();
    console.log(s);
    // console.log(storage);
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  doSubmit(): void {
    // const usernameDom: any = document.getElementById('username1');
    // console.log(usernameDom.value);
    console.log(this.peopleInfo);
  }
}
