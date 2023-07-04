import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'entelechia-sign-up';
  fullName : string = '';

  getFullName(fullName: string){
    this.fullName = fullName;
  }
}
