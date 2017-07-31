import { Injectable } from '@angular/core';

@Injectable()
export class UserserviceService {

  names:string[];
  constructor() { }

  getnames(){
  this.names = ['Aakash', 'Aditya', 'Krunal', 'Lalit','Loukik','Ravindra','Smita','Sobhan','Suyog','Swati','Vaishali'];
  return this.names;
  }
}
