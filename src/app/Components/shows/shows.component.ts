import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/httpService';

@Component({
  selector: 'app-shows',
  templateUrl: 'shows.component.html',
  styleUrls: ['./shows.component.scss']

})
export class ShowsComponent implements OnInit {

  showList;
  singleShow;
  searchBox;
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.service.isUserLogged();
    this.service.getShows()
    .subscribe((data) => {

      this.showList = data;
    });
    
  }
  
}
