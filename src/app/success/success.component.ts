import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-success',
  template: `<p>success works!!!!!!!!.....</p>`,
  styles:[
    `p{
      margin:20px;
      background-color:green;
    }
    `
  ]
})
export class SuccessComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
