import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-<%= name %>',
  template: ` <p><%= name %> works!</p> `,
  styles: [],
})
export class <%= moduleName %>Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
