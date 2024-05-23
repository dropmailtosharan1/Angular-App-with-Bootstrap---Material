/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
})
export class UserAddComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get f(): any { return this.userForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if(this.userForm.invalid){
      return;
    }
    const avatar = 'assets/img/user.jpg';
    const first_name = this.f.first_name.value;
    const last_name = this.f.last_name.value;

    this.requestService.addUser( { first_name, last_name, avatar } as User )
      .subscribe(() => this.router.navigate( ['users'] ));
  }

}
