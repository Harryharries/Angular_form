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
  public keyword: string;
  public history: any[] = [];

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

  constructor(public storage: StorageService
              ) {

    // const s = this.storage.get();
    // console.log(s);
    // console.log(storage);
  }



  ngOnInit(){

    var searchlist:any = this.storage.get('searchlist');
    console.log("aaa"+searchlist);
    if (searchlist){
      this.history = searchlist;
    }

    var rxjsData=this.storage.getRxjsData();

    rxjsData.subscribe((data)=>{
      console.log(data);
    })

  }

  // tslint:disable-next-line:typedef
  doSubmit(): void {
    // const usernameDom: any = document.getElementById('username1');
    // console.log(usernameDom.value);
    console.log(this.peopleInfo);
  }

  dopush(): void{
    if (this.history.indexOf(this.keyword) == -1){
      this.history.push(this.keyword);

      this.storage.set('searchlist', this.history);
    }
    this.keyword = '';
  }
  deleteHistory(key){
    this.history.splice(key, 1);
  }
}
