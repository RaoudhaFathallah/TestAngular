import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import '@angular/compiler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RestComponent } from './rest/rest.component';
//import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    //RestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    /*RouterModule.forRoot([
      {path: 'rest', component: RestComponent},
    ]),*/
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
