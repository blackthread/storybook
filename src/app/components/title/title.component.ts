import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<H1>{{title}}</H1>`
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  constructor() { }
  ngOnInit(): void {
  }

}
