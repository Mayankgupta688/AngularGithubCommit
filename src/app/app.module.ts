import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import AppComponent from './container/appComponent/app.component';
import HeaderComponent from './components/headerComponent/header.component';
import RepoContainerComponent from "./components/headerComponent/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepoContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
