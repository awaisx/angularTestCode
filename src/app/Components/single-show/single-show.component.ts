import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/Services/httpService';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {

   showDetail;
   id;
   ShowCast;
   showSeason;
   showSeasonEpisode;
  constructor(private route:ActivatedRoute,private http:HttpService,
    private router:Router) { }


  ngOnInit() {
    this.http.isUserLogged();
    this.id =this.route.snapshot.params.id;
    this.http.getShow(this.id)
    .subscribe((data) => {
    
      this.showDetail = data;

      this.http.getShowCast(this.id)
      .subscribe((data) => {
        
        this.ShowCast = data;
      if(this.ShowCast.length > 5){

        this.ShowCast =this.ShowCast.slice(0, 5);
      }
      this.http.getShowSeason(this.id)
      .subscribe((data)=>{

        this.showSeason = data;

      })
      });


    });
  }
  goToPeople(obj){

    this.http.storeData(obj);
    this.router.navigate(['/people', obj.id]);

  }

  getEpisodes (obj){
    obj.toggle = obj.toggle ? false:true;
    this.http.getShowSeasonEpisode(obj.id)
      .subscribe((data) => {
        obj.showSeasonEpisode = data;

      })

  }

}
