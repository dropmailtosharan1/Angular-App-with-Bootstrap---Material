/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      requestService
        .getUser(params['id'])
        .subscribe((res: User) => (this.user = res));
    });
  }

  save(): void {
    this.requestService
      .updateUser(this.user)
      .subscribe(() => this.router.navigate(['users']));
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
}
