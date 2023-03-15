import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newsApiUrl= "https://newsapi.org/v2/top-headlines?country=ca&apiKey=6879b74757e54b748e0011348a3bf1cf"
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
