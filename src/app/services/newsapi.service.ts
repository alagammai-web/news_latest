import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {


  constructor(private http: HttpClient) { }

  initSources(){
    return this.http.get('https://saurav.tech/NewsAPI/everything/cnn.json');
 }
 initArticles(){
  return this.http.get('https://saurav.tech/NewsAPI/everything/cnn.json');
 }
 getArticlesByID(source: any){
  return this.http.get('https://saurav.tech/NewsAPI/everything/cnn.json');
 }
}
