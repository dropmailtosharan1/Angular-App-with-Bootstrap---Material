import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../services/request.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: ''
  };
  constructor (private activatedRoute: ActivatedRoute, private requestService:RequestService) { 
    this.activatedRoute.params.subscribe((params) =>{
      requestService.getUser(params ['id'])
      .subscribe((res:User) => this.user=res);
    })
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { }
  
}
