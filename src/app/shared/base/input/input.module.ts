import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {
  NumericTextBoxModule,
  TextBoxModule,
} from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, TextBoxModule, NumericTextBoxModule],
  exports: [InputComponent],
})
export class InputModule {}
