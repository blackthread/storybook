import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {
  @Input() label = 'Label';
  @Input() placeholder = 'Placeholder';
  @Input() disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
