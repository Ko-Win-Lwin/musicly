import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://randomuser.me/api/?results=10"

  constructor(private _http: HttpClient) { }

  getUser():Observable<any> {
    return this._http.get<any>(this.url)
  }
}
