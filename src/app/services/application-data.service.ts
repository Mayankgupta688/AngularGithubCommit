import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class ApplicationDataService {

  constructor(private _http: HttpClient) { }

  getRepositoryData(): Observable<any> {
    return this._http.get("https://api.github.com/repos/angular/angular");
  }

  getCommitData(): Observable<any> {
    return this._http.get("https://api.github.com/repos/angular/angular/commits")
  }
}
