import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/httpService';
@Component({
  selector: 'app-login',
  templateUrl: 'login.components.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validation : boolean = false;
  username;password;
  constructor(private rout:Router,private http:HttpService) { }

  ngOnInit() {
  }
  Login(form : NgForm){

    let username  = form.value.username;
    let password = form.value.password;
    if(username.toLowerCase() == 'test' && password == 'test')
    {
      this.http.UserLogged();
      this.rout.navigate(['/shows']);
    }
    else{
      this.validation = true;
    }
    

  }
}
