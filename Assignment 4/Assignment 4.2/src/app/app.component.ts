import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is App component [Root-Component]';
  names = ['Aakash', 'Aditya', 'Krunal', 'Lalit','Loukik','Ravindra','Smita','Sobhan','Suyog','Swati','Vaishali'];
  showAlert(msg:string){
    alert(msg);
  }
}