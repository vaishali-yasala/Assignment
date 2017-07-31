import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class childComponent {
  heading = 'This is USER component! [Child of a ROOT]';
   names = ['Aakash', 'Aditya', 'Krunal', 'Lalit','Loukik','Ravindra','Smita','Sobhan','Suyog','Swati','Vaishali'];
   visibility = 'hidden'; 
   toggle(){
       if (this.visibility == 'visible')
        {
         this.visibility='hidden';
       }
        else {
          this.visibility='visible';
        }
     } 
      getvisibility(){
        return this.visibility;
      }
    }
