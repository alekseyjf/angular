import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
