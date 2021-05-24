import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-<%= name %>',
  templateUrl: './<%= name %>.component.html',
  styleUrls: ['./<%= name %>.component.less']
})
export class <%= moduleName %>Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
