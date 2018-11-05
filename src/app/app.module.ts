import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// Import the HttpClient  Module and our Data Service
import { HttpClientModule } from "@angular/common/http";
// import { DataService } from './data.service';
// import { PostsService } from './posts.service';
import { HeaderComponent } from "./header/header.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
// import { PostsComponent } from "./pages/posts/posts.component";
import { RegisterComponent } from "./pages/register/register.component";

import { Routes, RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { StoreComponent } from "./pages/store/store.component";

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  // { path: "posts", component: PostsComponent },
  { path: "register", component: RegisterComponent },
  { path: "store", component: StoreComponent },
  { path: "**", component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutPageComponent,
    HomePageComponent,
    FooterComponent,
    // PostsComponent,
    RegisterComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule, // <-Add HttpClientModule
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule {}
