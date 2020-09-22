import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-date',
  template: `
  <app-display-field-container [label]="label">
      {{ field | date:'shortDate'}}
  </app-display-field-container>`
})
export class DisplayDateComponent {
  @Input() label: string;
  @Input() field: Date;
}
