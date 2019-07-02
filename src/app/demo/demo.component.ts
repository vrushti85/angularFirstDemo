import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <app-demo></app-demo>
  <app-demo></app-demo>`,
   styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
