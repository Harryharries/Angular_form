/*
 * @Author: your name
 * @Date: 2020-09-23 13:28:05
 * @LastEditTime: 2020-09-24 10:23:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/app/components/home/home.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { debugPort } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = false;

  public picUrl = 'https://i0.hdslb.com/bfs/archive/622017dd4b0140432962d3ce0c6db99d77d2e937.png';
  keywords = '';

  constructor() { }

  ngOnInit(): void {
  }

  test(): void{
    this.title = true;
  }

  run(event): void {
    const dom: any = event.target;
    dom.style.color = 'red';
  }

}
