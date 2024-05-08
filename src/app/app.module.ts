import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './directive/highlight.directive';
import { NavbarComponent } from './rest-api/navbar/navbar.component';
import { HomeComponent } from './rest-api/home/home.component';
import { AboutComponent } from './rest-api/about/about.component';
import { ContactComponent } from './rest-api/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './rest-api/services/in-memory-data.service';
import { UserDetailComponent } from './rest-api/user/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation:false})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
