import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  _isAdmin: boolean =false;
  constructor (private service: CarService,private route:Router){
    if(localStorage.getItem('role') == 'Admin'){
      this._isAdmin = true;
    }; 
    console.log(this._isAdmin)
  }

  ngOnInit():void{
    
  };
logOut(){
  sessionStorage.removeItem('key');
  this.route.navigate([`login`]);
};
}
