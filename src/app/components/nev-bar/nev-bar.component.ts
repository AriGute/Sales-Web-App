import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nev-bar',
  templateUrl: './nev-bar.component.html',
  styleUrls: ['./nev-bar.component.scss'],
})
export class NevBarComponent implements OnInit {
  someList = [
    { text: 'Profile', color: 'rgb(0, 70, 255)', path: 'profile' },
    { text: 'Home', color: 'rgb(0, 90, 255)', path: '' },
    { text: 'Shop', color: 'rgb(0, 110, 255)', path: 'shop' },
    { text: 'About', color: 'rgb(0, 130, 255)', path: 'about' },
    { text: 'Contact us', color: 'rgb(0, 150, 255)', path: 'contact' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
