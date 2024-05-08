import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users:User[] = [];

  constructor ( private requestService:RequestService, private router: Router) {
    this.getUsers();
   }

  getUsers(){
    this.requestService.getUsers().subscribe(
      (res: User[]) => {
        // console.log(res);
        this.users= res;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  userDetails( id: number ) {
    this.router.navigate( ['user', id] );
    console.log( 'User id: ', id );
  }
}
