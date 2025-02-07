import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './gifs/pages/home/home-page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    GifsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
