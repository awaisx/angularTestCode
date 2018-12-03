import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PeopleComponent } from './Components/people/people.component';
import { LoginComponent } from './Components/login/login.component';
import { ShowsComponent } from './Components/shows/shows.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

import {HttpService} from './Services/httpService';
import { SingleShowComponent } from './Components/single-show/single-show.component';
import { SinglePeopleComponent } from './Components/single-people/single-people.component';
import { SearchPipe } from './search.pipe';

const appRoutes: Routes = [
  { path: 'shows', component: ShowsComponent },
  { path: 'people',        component: PeopleComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'contact-us',   component: ContactComponent },
  {path:'show/:id',component:SingleShowComponent},
  {path:'people/:id',component:SinglePeopleComponent},
  { path: '**',  redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    LoginComponent,
    ShowsComponent,
    ContactComponent,
    SingleShowComponent,
    SinglePeopleComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
