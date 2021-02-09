import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/core/search.service';
import { ToastService } from 'src/app/core/toast.service';
import { environment } from 'src/environments/environment';
import { BaseComponent } from '../../base/base.component';
import { User } from '../user-item/user-item.component';

@Component({
  selector: 'ares-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent extends BaseComponent implements OnInit {
  users: User[];
  key = '';
  page = 1;
  count = 0;
  public pageSize = environment.settings.pageSize;
  public loading$ = new Subject<boolean>();
  constructor(
    private searchService: SearchService,
    private toastService: ToastService
  ) {
    super();
  }

  ngOnInit(): void {}

  getUsers(key?: string): void {
    // this.loading$.next(true);
    // this.searchService
    //   .searchUsers({ key: this.key, pageSize: this.pageSize, page: this.page })
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(
    //     (result: any) => {
    //       const { items, total_count } = result;
    //       this.users = items;
    //       this.count = total_count;
    //       this.loading$.next(false);
    //     },
    //     (_) => {
    //       this.toastService.showErrorToast({});
    //       this.loading$.next(false);
    //     }
    //   );
  }

  handlePageChange(event): void {
    this.page = event;
    this.getUsers();
  }
}
