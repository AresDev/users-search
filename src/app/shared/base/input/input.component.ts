import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface InputEvent {
  container: HTMLElement;
  event: Event;
  name: string;
  previousValue: any;
  value: any;
  isInteraction: boolean;
}

@Component({
  selector: 'ares-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() enabled = true;
  @Input() multiline = false;
  @Input() rows = 2;
  @Input() readonly = false;
  @Input() showClearButton = false;
  @Input() type = 'text';
  @Input() value = '';
  @Input() width: string | number = null;
  @Input() floatingLabel = true;
  @Input() preventPattern: RegExp;
  @Input() label = '';

  @Output() onblur = new EventEmitter<InputEvent>();
  @Output() changed = new EventEmitter<InputEvent>();
  @Output() focused = new EventEmitter<InputEvent>();
  @Output() oninput = new EventEmitter<InputEvent>();

  public onChangeCallback: (val: any) => void;
  public onTouchedCallback: () => void;

  constructor() {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.enabled = !isDisabled;
  }

  onBlur(event: InputEvent): void {
    this.call(this.onTouchedCallback);
    this.onblur.emit(event);
  }

  onChange(event: InputEvent): void {
    if (event.isInteraction) {
      this.value = event.value;
      this.call(this.onChangeCallback, event.value);
      this.changed.emit(event);
    }
  }

  onFocus(event: InputEvent): void {
    this.focused.emit(event);
  }

  onInput(event: InputEvent): void {
    this.oninput.emit(event);
  }

  keydown(e: KeyboardEvent): void {
    if (this.preventPattern && this.preventPattern.test(e.key)) {
      e.preventDefault();
    }
  }

  get htmlAttributes(): { [key: string]: string } {
    const attr: { [key: string]: string } = {};

    if (this.multiline) {
      attr.rows = `${this.rows}`;
    }

    return attr;
  }

  private call(fn: (val: any) => void, val?: any): void {
    if (fn && typeof fn === 'function') {
      fn(val);
    }
  }
}
