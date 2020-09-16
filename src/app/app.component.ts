import { Component } from '@angular/core';
import { NewsapiService } from './services/newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freeAPI Data';
// sidenavopen = false;
mArticles: any;
// mSources: Array<any>;

    constructor(private newsapiService: NewsapiService) {

    }


    ngOnInit() {
    this.newsapiService.initSources().subscribe(
    (resp) => {
    this.mArticles = resp;
    },
    (err) => {
    console.log('error occred while fetch data');
    }
    );

    // this.newsapiService.initSources().subscribe((resp)=>{
    // this.mSources = resp['source'];
    // },
    // (err)=>{
    // console.log('error while fetch articles');
    // }
    // );
    }

    // sidenav() {
    // this.sidenavopen = !this.sidenavopen;
    // }

    // sourceclick(ss){
    // this.newsapiService.getArticlesByID(ss).subscribe((resp) => {
    // this.mArticles = resp['articles'];
    // },
    // (err) => {
    // console.log('error came');
    // });
    // }
}
