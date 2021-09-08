import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nev-bar',
  templateUrl: './nev-bar.component.html',
  styleUrls: ['./nev-bar.component.scss'],
})
export class NevBarComponent implements OnInit {
  someList: string[] = ['test1', 'test2'];
  constructor() {}

  ngOnInit(): void {}
}
