import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nev-bar-button',
  templateUrl: './nev-bar-button.component.html',
  styleUrls: ['./nev-bar-button.component.scss'],
})
export class NevBarButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() path?: String;
  @Input() btnColor?: string = 'green';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.text);
  }
}
