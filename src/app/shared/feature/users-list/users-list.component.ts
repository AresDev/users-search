import { Component, Input, OnInit } from '@angular/core';
export interface User {
  login: string;
}

@Component({
  selector: 'ares-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  constructor() {}

  ngOnInit(): void {}
}
