import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-storybookbutton',
  template: `
    <button (click)="onClick.emit($event)">{{ text }}</button>
  `,
  styles: [
    `
      button {
        border: 1px solid #eee;
        border-radius: 3px;
        background-color: #ffffff;
        cursor: pointer;
        font-size: 15px;
        padding: 3px 10px;
        margin: 10px;
      }
    `,
  ],
})
export default class StorybookbuttonComponent implements OnInit {
  @Input()  text = '';
  @Output()
  onClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
