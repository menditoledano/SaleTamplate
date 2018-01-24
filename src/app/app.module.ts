import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { PostsService } from './posts.service';
import { HeaderComponent } from './header/header.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostsComponent } from './pages/posts/posts.component';
import { RegisterComponent } from './pages/register/register.component';

import {Routes, RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'register', component: RegisterComponent },
  {path: '**', component: HomePageComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutPageComponent,
    HomePageComponent,
    FooterComponent,
    PostsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule ,             // <-Add HttpModule
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [DataService, PostsService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }