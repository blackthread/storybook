import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-text',
  template: '<app-display-field-container [label]="label">{{ field }}</app-display-field-container>'
})
export class DisplayTextComponent {
  @Input() field: string;
  @Input() label: string;
}
