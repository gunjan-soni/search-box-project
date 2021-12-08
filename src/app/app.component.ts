import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public searchTerm: any[''];
  title = 'my-project';
  apiData : any = []
  constructor (private user : UserService){
    this.user.getData().subscribe(res=>{
      this.apiData = res;
      console.log(this.apiData);
    });
  }
}