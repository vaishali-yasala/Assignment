import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import {UserserviceService}from '/home/clairvoyant/Work/27th July/Assignment 5/src/app/userservice.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[UserserviceService]
})

export class childComponent {
  heading = 'This is USER component! [Child of a ROOT]';
   @Input ('names') names;
   @Output ('msg') msg = new EventEmitter();
   
    constructor(private ser : UserserviceService) { 
    
  }

    ngOnInit (){
      this.names = this.ser.getnames();
    }
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
   getvisibility()
   {
     return this.visibility;
   }
    showalert(){
      this.msg.emit('This is alert message passed from child component i.e user to parent component');
    }
  
    }
