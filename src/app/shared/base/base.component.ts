import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {
  destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public formGroupHasError(
    formControl: FormGroup,
    data: { error?: string; exclude?: string[] }
  ): boolean {
    const { error = 'required', exclude = [] } = data || {};

    const controls = Object.keys(formControl.controls)
      .filter((key) => !exclude.includes(key))
      .map((controlName) => formControl.get(controlName));
    return (
      controls.some((control) => control?.hasError(error)) &&
      controls.every((control) => control?.touched && control.dirty)
    );
  }
}
