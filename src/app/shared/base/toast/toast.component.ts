import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ares-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent extends Toast {
  public type: string;

  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage
  ) {
    super(toastrService, toastPackage);
    this.type = this.toastPackage.toastType;
  }

  public getCurrentIcon(): IconProp {
    switch (this.type) {
      case 'toast-info':
        return ['fas', 'info'];
      case 'toast-warning':
        return ['fas', 'exclamation'];
      case 'toast-error':
        return ['fas', 'times'];
      case 'toast-success':
        return ['fas', 'check'];
      default:
        return ['fas', 'info'];
    }
  }
}
