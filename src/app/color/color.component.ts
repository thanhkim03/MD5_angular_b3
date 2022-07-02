import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }

  red = 255;
  blue = 255;
  green = 255;
  ngOnInit() {
  }

}
