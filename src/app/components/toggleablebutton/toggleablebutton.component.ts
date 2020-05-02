import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleablebutton',
  templateUrl: './toggleablebutton.component.html',
  styleUrls: ['./toggleablebutton.component.css']
})
export class ToggleablebuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectedChange(e) {
    console.log(e);
  }

}
