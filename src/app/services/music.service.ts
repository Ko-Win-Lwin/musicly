import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url: string = `https://itunes.apple.com/search?term=album&entity=album`
  constructor(private _http: HttpClient) { }

  getAlbum(): Observable<any> {
    return this._http.get<any>(this.url)
  }
}
