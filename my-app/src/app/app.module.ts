import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponentComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
