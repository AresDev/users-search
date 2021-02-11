import { BehaviorSubject, Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user-item/user-item.component';

@Component({
  selector: 'ares-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input() userDetail: any;
  constructor() {}

  ngOnInit(): void {}
}
