import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class childComponent {
  heading = 'This is USER component! [Child of a ROOT]';
   @Input ('names') names;
   @Output ('msg') msg = new EventEmitter();
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
