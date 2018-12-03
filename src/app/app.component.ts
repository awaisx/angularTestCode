import { Component } from '@angular/core';
import { HttpService } from './Services/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TvMaze';
  year:Date = new Date();
  constructor(private http:HttpService){}
  userLogin = 'Login';

  ngDoCheck():void{

    if(this.http.isUserLoggedIn()){
      this.userLogin = 'Test';
    }
    else{
      this.userLogin = 'Login';
    }
    

  }

}
