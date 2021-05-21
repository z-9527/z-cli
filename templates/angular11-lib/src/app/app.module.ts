import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from '<%= name %>';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
