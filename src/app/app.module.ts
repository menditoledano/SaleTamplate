import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Import the HttpClient  Module and our Data Service
import { HttpClientModule } from '@angular/common/http';
// import { DataService } from './data.service';
// import { PostsService } from './posts.service';
import { HeaderComponent } from './header/header.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { PostsComponent } from "./pages/posts/posts.component";
import { RegisterComponent } from './pages/register/register.component';

import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './pages/store/store.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'store', component: StoreComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutPageComponent,
    HomePageComponent,
    FooterComponent,
    RegisterComponent,
    StoreComponent,
    PaymentComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    MatProgressSpinnerModule, // <-Add HttpClientModule
    RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled' })
  ],
  providers: [], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule {}
