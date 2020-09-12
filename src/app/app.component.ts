import { Component } from '@angular/core';
import { NewsapiService } from './services/newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Latest News';
sidenavopen = false;
mArticles: Array<object>;
mSources: Array<object>;

    constructor(private newsapiService: NewsapiService) {

    }


    ngOnInit() {
    this.newsapiService.initArticles().subscribe(
    (resp) => {
    this.mArticles = resp['articles'];
    },
    (err) => {
    console.log('error occred while fetch data');
    }
    );

    this.newsapiService.initSources().subscribe((resp)=>{
    this.mSources = resp['sources'];
    },
    (err)=>{
    console.log("error while fetch articles");
    }
    );
    }

    sidenav() {
    this.sidenavopen = !this.sidenavopen;
    }

    sourceclick(ss){
    this.newsapiService.getArticlesByID(ss).subscribe((resp) => {
    this.mArticles = resp['articles'];
    },
    (err) => {
    console.log('error came');
    });
    }
}