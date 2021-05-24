import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { <%= moduleName %>Module } from '<%= name %>';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, <%= moduleName %>Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
