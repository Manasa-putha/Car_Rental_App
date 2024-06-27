import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-rental-agrements',
  templateUrl: './rental-agrements.component.html',
  styleUrls: ['./rental-agrements.component.css']
})
export class RentalAgrementsComponent {
  items:any;
  _email:any;
  _isAdmin: boolean =false;
    
  constructor (private service:CarService,private router:Router){
    this._isAdmin =this.service.getAdminValue(); 
    
    this.service.getUserAggrement().subscribe((_data :any)=>{
   
    this.items = JSON.parse(_data);
    console.log(this.items);
    
    
  });
  }
  
  pushStatus(id:number){
    this.service.pushReturn(id).subscribe({next:(response) =>{
    alert("Done");
      this.router.navigate(['aggrement',id]);
    
    }
      });
  }
}
