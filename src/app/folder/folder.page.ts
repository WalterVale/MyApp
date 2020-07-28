import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFeedsService} from '../news-feeds.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  articles: any;
  constructor(private activatedRoute: ActivatedRoute, private newsService:NewsFeedsService) { 
    this.loadNew();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  loadNew(){
    this.newsService.getNews("top-headlines?country=ar").subscribe(news =>{
       this.articles = news['articles'];
       console.log(this.articles);
    })
    
  }

}
