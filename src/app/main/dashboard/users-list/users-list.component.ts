import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { SearchService } from 'src/app/core/search.service';
import { ToastService } from 'src/app/core/toast.service';
import { environment } from 'src/environments/environment';
import * as fromUsers from '../../../core/store/user';
import { BaseComponent } from '../../../shared/base/base.component';
import { User } from '../../../shared/feature/user-item/user-item.component';

@Component({
  selector: 'ares-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent extends BaseComponent implements OnInit {
  users$: Observable<User[]>;
  totalUsers$: Observable<number>;
  currentPage$: Observable<number>;
  loading$: Observable<boolean>;

  $: Observable<number>;
  key = '';
  page = 1;
  count = 0;
  public pageSize = environment.settings.pageSize;

  constructor(
    private searchService: SearchService,
    private toastService: ToastService,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(
      select(fromUsers.selectLoading),
      shareReplay(1)
    );

    this.users$ = this.store.pipe(
      select(fromUsers.selectUsers),
      shareReplay(1)
    );

    this.totalUsers$ = this.store.pipe(
      select(fromUsers.selectTotalUsers),
      shareReplay(1)
    );

    this.currentPage$ = this.store.pipe(
      select(fromUsers.selectCurrentPage),
      shareReplay(1)
    );
  }

  handlePageChange(event): void {
    // dispatch update page
    this.store.dispatch(fromUsers.changePage({ page: event }));
  }

  selectUser(user: User): void {
    // dispatch select user
    this.store.dispatch(fromUsers.selectUser({ selectedUser: user }));
  }
}
