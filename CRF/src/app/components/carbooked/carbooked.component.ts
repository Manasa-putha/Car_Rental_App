import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carbooked',
  templateUrl: './carbooked.component.html',
  styleUrls: ['./carbooked.component.css']
})
export class CarbookedComponent {
  user:any;
  data:any;
  _available: boolean = true;
  _isAdmin: boolean =false;
  page:number=1;
  constructor (private service:CarService) {
 console.log(this.service.getAdminValue());
    this._isAdmin =this.service.getAdminValue(); 
  
    this.service.getAllData().subscribe((_data :any) => {
      this.data = _data;
      console.log(this.data);
      // this._available= _data.avaialblity;
    }
    
    );
  }
}
