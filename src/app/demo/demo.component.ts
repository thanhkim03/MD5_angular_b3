import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert(1)
  }
  title = 'angular_demo';

  arr = ["red", "Thuong", "Thanh", "Hai", "Long"];

  arrNumber = [5, 2, 3, 4, 3, 2, 1]

}
