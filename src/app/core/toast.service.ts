import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

interface ToastConfig {
  title?: string;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private genericTitle = 'Error';
  private genericErrorMessage =
    'An unexpected error occured, please try again later.';

  constructor(
    private toast: ToastrService /*private translateService: TranslateService*/
  ) {}

  public showErrorToast(config?: ToastConfig): void {
    const {
      title = config.title ||
        this
          .genericTitle /*this.translateService.instant('GENERIC_ERROR.title')*/,
      message = config.message ||
        this
          .genericErrorMessage /*this.translateService.instant('GENERIC_ERROR.message')*/,
    } = config;

    this.toast.error(message, title, {
      timeOut: 10000,
    });
  }

  public showWarningToast(config: ToastConfig): void {
    const {
      title = config.title ||
        this
          .genericTitle /*
        this.translateService.instant('GENERIC_ERROR.title')*/,
      message = config.message ||
        this
          .genericErrorMessage /*this.translateService.instant('GENERIC_ERROR.message')*/,
    } = config;
    this.toast.warning(message, title, {
      timeOut: 10000,
    });
  }

  public showSuccessToast(config: ToastConfig): void {
    const {
      title = config.title /*||
        this.translateService.instant('GENERIC_ERROR.title')*/,
      message = config.message ||
        this
          .genericErrorMessage /*
        this.translateService.instant('GENERIC_ERROR.message')*/,
    } = config;
    this.toast.success(message, title, {
      timeOut: 10000,
    });
  }
}
