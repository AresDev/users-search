import { TextComponent } from './text/text.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from './input/input.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [TextComponent, ToastComponent],
  imports: [CommonModule, InputModule, FontAwesomeModule],
  exports: [InputModule, TextComponent, ToastComponent],
})
export class BaseModule {}
