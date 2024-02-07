import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import { SearchBoxComponent } from './component/search-box/search-box.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
