import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastService } from '../core/toast.service';
import { BaseComponent } from '../shared/base/base.component';
import { User } from '../shared/feature/user-item/user-item.component';
import { SearchService } from './../core/search.service';

export interface Params {
  key: string;
  page: number;
  pageSize: number;
}

@Component({
  selector: 'ares-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent extends BaseComponent implements OnInit {
  form: FormGroup = this.fb.group({
    key: this.fb.control(null, [Validators.required]),
  });

  users: User[];
  key = '';
  page = 1;
  count = 0;
  public pageSize = environment.settings.pageSize;
  public loading$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private toastService: ToastService
  ) {
    super();
  }

  ngOnInit(): void {}

  search(): void {
    this.page = 1;
    this.form.markAllAsTouched();
    this.form.markAsDirty();

    Object.keys(this.form.controls).forEach((controlName) => {
      const control = this.form.get(controlName);
      control.markAsDirty();
    });

    if (this.form.valid) {
      const values = this.form.value;
      this.key = values.key;
      this.getUsers();
    }
  }

  getUsers(key?: string): void {
    this.loading$.next(true);
    this.searchService
      .searchUsers({ key: this.key, pageSize: this.pageSize, page: this.page })
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result: any) => {
          const { items, total_count } = result;
          this.users = items;
          this.count = total_count;
          this.loading$.next(false);
        },
        (_) => {
          this.toastService.showErrorToast({});
          this.loading$.next(false);
        }
      );
  }

  handlePageChange(event): void {
    this.page = event;
    this.getUsers();
  }
}
