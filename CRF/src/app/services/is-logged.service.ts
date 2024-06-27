import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {
  private adminEmails : string[]=['admin@gmail.com'];
 
  isAdmin(email:string):boolean{
    console.log(this.adminEmails.includes(email))
    return this.adminEmails.includes(email);
    
  }
  constructor() { }
}
