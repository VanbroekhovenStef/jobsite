import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  users$: Subscription = new Subscription();
  deleteUser$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.users$.unsubscribe();
    this.deleteUser$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['/user/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['/user/form'], {state: {id: id, mode: 'editAdmin'}});
  }

  delete(id: number) {
    this.deleteUser$ = this.userService.deleteUser(id).subscribe(result => {
      //all went well
      this.getUsers();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getUsers() {
    this.users$ = this.userService.getUsers().subscribe(result => this.users = result);
  }

}
