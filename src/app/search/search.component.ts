import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../shared/base/base.component';
import { User } from '../shared/feature/users-list/users-list.component';
import { SearchService } from './../core/search.service';

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

  constructor(private fb: FormBuilder, private searchService: SearchService) {
    super();
  }

  ngOnInit(): void {}

  search(): void {
    this.form.markAllAsTouched();
    this.form.markAsDirty();

    Object.keys(this.form.controls).forEach((controlName) => {
      const control = this.form.get(controlName);
      control.markAsDirty();
    });

    if (this.form.valid) {
      const values = this.form.value;

      this.searchService
        .searchUsers(values.key)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (result: any) => {
            console.log(result);
            this.users = result.items;
          },
          (error) => {
            // this.toastService.showErrorToast({
            //   message: `${error.description}`,
            // });
          }
        );
    }
  }
}
