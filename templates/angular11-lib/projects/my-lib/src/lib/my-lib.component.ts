import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-<%= name %>',
  template: ` <p><%= name %> works!</p> `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
