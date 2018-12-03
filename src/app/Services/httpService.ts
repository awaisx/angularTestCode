import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
@Injectable()

export class HttpService{

    private myobj;
    private isLogged = false;
    constructor(private http: HttpClient,private rute:Router){}

    getShows(){

       return this.http.get('http://api.tvmaze.com/shows');


    }
    getShow(id:number){

        return this.http.get('http://api.tvmaze.com/shows/'+id);
 
 
     }
     searchPeople(str:string){

        return this.http.get('http://api.tvmaze.com/search/people?q='+str);

     }
     PeopleCast(id:number){

        return this.http.get('http://api.tvmaze.com/people/'+id+'/castcredits?embed=show');

     }
     PeopleCrew(id:number){
        return this.http.get('http://api.tvmaze.com/people/'+id+'/crewcredits?embed=show'); 
    }
    
    storeData(obj){
        this.myobj = obj;

    }
    getData(){

        return this.myobj;

    }
    getShowCast(id:number){
        return this.http.get('http://api.tvmaze.com/shows/'+id+'/cast'); 
    }
getShowSeason(id:number){
     
    return this.http.get('http://api.tvmaze.com/shows/'+id+'/seasons'); 
}
getShowSeasonEpisode(id:number){
     
    return this.http.get('http://api.tvmaze.com/seasons/'+id+'/episodes'); 
}

UserLogged(){
    this.isLogged = true;
    
}

isUserLogged(){

if(this.isLogged){
    return;
}
else{
    this.rute.navigate(['/login']);
}

}

isUserLoggedIn():boolean{

    if(this.isLogged){
        return true;
    }
    else{
       return false;
    }
    
    }
}
