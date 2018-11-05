var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// Import the HttpClient  Module and our Data Service
import { HttpClientModule } from "@angular/http";
import { DataService } from "./data.service";
import { PostsService } from "./posts.service";
import { HeaderComponent } from "./header/header.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
var routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "posts", component: PostsComponent },
  { path: "**", component: HomePageComponent }
];
var AppModule = /** @class */ (function() {
  function AppModule() {}
  AppModule = __decorate(
    [
      NgModule({
        declarations: [
          AppComponent,
          HeaderComponent,
          AboutPageComponent,
          HomePageComponent,
          FooterComponent,
          PostsComponent
        ],
        imports: [
          BrowserModule,
          HttpClientModule,
          RouterModule.forRoot(routes, { useHash: true })
        ],
        providers: [DataService, PostsService],
        bootstrap: [AppComponent]
      })
    ],
    AppModule
  );
  return AppModule;
})();
export { AppModule };
//# sourceMappingURL=app.module.js.map
