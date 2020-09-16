import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {


  constructor(private http: HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/everything?q=apple&from=2020-09-15&to=2020-09-15&sortBy=popularity&apiKey=3a3d4565183942a3bd71e8dc3ea43ac1');
 }
 initArticles(){
  return this.http.get('https://newsapi.org/v2/everything?q=apple&from=2020-09-15&to=2020-09-15&sortBy=popularity&apiKey=3a3d4565183942a3bd71e8dc3ea43ac1');
 }
 getArticlesByID(source: any){
  return this.http.get('https://newsapi.org/v2/everything?q=apple&from=2020-09-15&to=2020-09-15&sortBy=popularity&apiKey=3a3d4565183942a3bd71e8dc3ea43ac1');
 }
}
