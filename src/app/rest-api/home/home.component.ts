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
  loading = false;

  constructor ( private requestService:RequestService, private router: Router) {
    this.getUsers();
   }

  getUsers(){
    this.loading=true;

    this.requestService.getUsers().subscribe(
      (res: User[]) => {
        // console.log(res);
        this.users= res;

        this.loading=false;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  userDetails( id: number ) {
    this.router.navigate( ['user', id] );
    console.log( 'User id: ', id );
  }

  addUser(): void {
    this.router.navigate( ['add'] );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteUser(user: any) {
    this.users = this.users.filter( u => u !== user );
    this.requestService.deleteUser(user).subscribe();
  }
}
