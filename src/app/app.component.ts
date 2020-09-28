/*
 * @Author: your name
 * @Date: 2020-09-23 02:18:37
 * @LastEditTime: 2020-09-27 11:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/app/app.component.ts
 */
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor(
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:typedef
  OnInit(){

  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit(){

  }
}
