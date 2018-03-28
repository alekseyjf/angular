import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = {
    red: 0,
    green: 0,
    blue: 255
  };

  myName: string = 'Jet Fire Transformer';

  changeTitle($e){

    this.title = '23';
  }

  setColor(){
    this.color = {
      red: 0,
      green: 255,
      blue: 0
    };
  }

  callback(event){
    console.log(event)
  }

}
