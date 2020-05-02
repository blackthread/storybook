import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<H1>{{selligent.title}}</H1>`
})
export class TitleComponent implements OnInit {
  title: string;
  @Input() selligent: any;
  constructor() { }
  ngOnInit(): void {
  }

}
