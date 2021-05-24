import { NgModule } from '@angular/core';
import { <%= moduleName %>Component } from './<%= name %>.component';

@NgModule({
  declarations: [<%= moduleName %>Component],
  imports: [],
  exports: [<%= moduleName %>Component],
})
export class <%= moduleName %>Module {}