import { Component } from '@angular/core';
import { ApiOrchardService } from './services/api-orchard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OrchardAngularTest';

  constructor(private orchardApi: ApiOrchardService){
    this.orchardApi = orchardApi;
  }

  ngOnInit(): void {
    this.orchardApi.getData().subscribe((res: any) => {
      if(res) {
        console.log(res)
      }
    })
  }
}
