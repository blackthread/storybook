import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-field-container',
  templateUrl: './display-field-container.component.html',
  styleUrls: ['./display-field-container-component.scss']
})
export class DisplayFieldContainerComponent {
  @Input() label: string;
}
