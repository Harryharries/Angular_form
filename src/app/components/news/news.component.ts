/*
 * @Author: your name
 * @Date: 2020-09-23 10:25:14
 * @LastEditTime: 2020-09-23 23:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Angular_learning/my-app/src/app/component/news/news.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  msg = 'new context';

  constructor() { }

  ngOnInit(): void {
  }

  eventsd(event): void{
  }

}
