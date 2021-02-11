import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromUser from 'src/app/core/store/user';
import { BaseComponent } from '../../../shared/base/base.component';

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

  constructor(private fb: FormBuilder, private store: Store) {
    super();
  }

  ngOnInit(): void {}

  search(): void {
    // this.page = 1;
    this.form.markAllAsTouched();
    this.form.markAsDirty();

    Object.keys(this.form.controls).forEach((controlName) => {
      const control = this.form.get(controlName);
      control.markAsDirty();
    });

    if (this.form.valid) {
      // this.store.dispatch(fromUser.changePage({ page: 1 }));
      const values = this.form.value;
      // dispatch search users(key)
      this.store.dispatch(fromUser.search({ key: values.key }));
    }
  }
}
