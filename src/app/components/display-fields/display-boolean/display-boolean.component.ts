import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-boolean',
  template: '<app-display-field-container [label]="label"><input type="checkbox" [checked]="field" disabled="disabled" /></app-display-field-container>'
})
export class DisplayBooleanComponent {
  @Input() field: boolean;
  @Input() label: string;
}
