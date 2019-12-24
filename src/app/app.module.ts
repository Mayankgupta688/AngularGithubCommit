import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import AppComponent from './container/appComponent/app.component';
import HeaderComponent from './components/headerComponent/header.component';
import RepoContainerComponent from "./container/repoContainerComponent/repo-container.component";
import RepoDetailsComponent from "./components/repoDetailsComponent/repo-details.container";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepoContainerComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
