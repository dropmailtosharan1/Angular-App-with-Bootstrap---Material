import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './rest-api/home/home.component';
import { AboutComponent } from './rest-api/about/about.component';
import { ContactComponent } from './rest-api/contact/contact.component';
import { UserDetailComponent } from './rest-api/user/user-detail.component';
import { UserAddComponent } from './rest-api/user/user-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'add', component: UserAddComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
