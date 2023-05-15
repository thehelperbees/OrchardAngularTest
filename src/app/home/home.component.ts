import { Component, OnInit } from '@angular/core';
import { ApiOrchardService } from '../services/api-orchard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home Page';

  articles?: any;
  styles?: any;
  
  constructor(private orchardApi: ApiOrchardService){
    this.orchardApi = orchardApi;
  }

  ngOnInit(): void {
    this.orchardApi.getArticles().subscribe((res: any) => {
      if(res) {
        this.articles = res[0]
        console.log(this.articles.CustomArticleType.ArticleImageItem.Paths[0])
      }
    })

    this.orchardApi.getCustomStyles().subscribe((res: any) => {
      if(res) {
        res?.forEach(function (loc: any) {
        let link: HTMLLinkElement = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', loc);
        document.head.appendChild(link);
        console.log(link)
    });
        this.styles = res[0]
      }
    })
  }
}
