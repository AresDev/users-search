import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ares-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() display;
  @Input() type;
  @Input() align;
  @Input() color;
  @Input() textstyle;

  getCssClasses(): string {
    const display = /^(block|inline)$/i.test(this.display)
      ? this.display
      : 'block';
    const type = /^(h1|h2|h3|h3|h4|h5|h6|h7|body)$/i.test(this.type)
      ? this.type
      : 'body';
    const color = /^(grey|grey-light|black|red)$/i.test(this.color)
      ? this.color
      : 'black';
    const align = /^(left|right|justify|center)$/i.test(this.align)
      ? this.align
      : 'left';
    const textstyle = /^(lowercase|uppercase|capitalize)$/i.test(this.textstyle)
      ? this.textstyle
      : 'none';
    return `ares-text--${display} ares-text--${type} ares-text--${color} ares-text--${align} ares-text--${textstyle}`;
  }
}
