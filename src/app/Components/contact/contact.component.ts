import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name; email; subject; detail;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submitForm(form:NgForm){

    alert("Submitted Successfully");

    form.reset();

  }
}
