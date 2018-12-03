import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/Services/httpService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  
  search;searchResult;str;
  constructor(private http:HttpService,private router:Router) { }

  ngOnInit() {
    this.http.isUserLogged();
  }
  searchEmployee(form:NgForm){

    this.str = form.value.search.trim();
    if(this.str.length > 0){
      this.http.searchPeople(this.str)
      .subscribe(data =>{

        this.searchResult = data;

      });
    }
   
  }
  goToPeople(obj){

    this.http.storeData(obj);
    this.router.navigate(['/people', obj.id]);

  }
}
