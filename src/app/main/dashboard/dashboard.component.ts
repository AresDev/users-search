import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as fromUsers from '../../core/store/user';
@Component({
  selector: 'ares-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userDetail$: Observable<any>;
  totalUsers$: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userDetail$ = this.store.pipe(
      select(fromUsers.selectSelectedUserDetail),
      shareReplay(1)
    );

    this.totalUsers$ = this.store.pipe(
      select(fromUsers.selectTotalUsers),
      shareReplay(1)
    );
  }
}
