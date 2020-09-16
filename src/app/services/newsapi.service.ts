import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {


  constructor(private http: HttpClient) { }

  initSources(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos');
 }
//  initArticles(){
//   return this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos');
//  }
//  getArticlesByID(source: any){
//   return this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos');
//  }
}
