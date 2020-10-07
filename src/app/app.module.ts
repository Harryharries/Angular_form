import { MaterialModule } from './core/material.module';
/*
 * @Author: your name
 * @Date: 2020-09-23 02:18:37
 * @LastEditTime: 2020-09-27 00:38:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Angular_learning/my-app/src/app/app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

// import and config service
import { StorageService } from './services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ReactformComponent } from './components/reactform/reactform.component';

@NgModule({
  declarations: [AppComponent, NewsComponent, HomeComponent, FormComponent, HeaderComponent, ReactformComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
