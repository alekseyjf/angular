import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { RgbPipe } from './rgb.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    RgbPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
