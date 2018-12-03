import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Services/httpService';

@Component({
  selector: 'app-single-people',
  templateUrl: './single-people.component.html',
  styleUrls: ['./single-people.component.scss']
})
export class SinglePeopleComponent implements OnInit {

   showDetailCrew;
   showDetailCast;
   peopleDetail;
   id;
  constructor(private route:ActivatedRoute,private http:HttpService) { }


  ngOnInit() {
    this.http.isUserLogged();
    this.id =this.route.snapshot.params.id;
   this.peopleDetail = this.http.getData();
   
    this.http.PeopleCast(this.id)
    .subscribe((data) => {
      
      this.showDetailCast = data;
      this.http.PeopleCrew(this.id)
    .subscribe((data) => {
     
      this.showDetailCrew = data;
    });
    });
    
  }
}
