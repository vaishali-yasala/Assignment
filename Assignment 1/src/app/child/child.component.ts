import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class childComponent {
  heading = 'This is USER component! [Child of a ROOT]'
}