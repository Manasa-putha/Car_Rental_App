
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';
import { CarService } from 'src/app/services/car.service';
import { FilterPipe } from 'src/app/services/filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
 page: number = 1;
 searchText: string = '';
  _available: boolean = true;
  _isAdmin: boolean =false;
  
  constructor (private service:CarService, private authService:AuthService,private route:Router) {
    this._isAdmin =this.service.getAdminValue(); 
  
  }
 ngOnInit(): void {
  this.service.getAllData().subscribe((_data :any) => {
    this.data = _data;
    console.log(this.data);
    this.filterData();
  });
 }

  logOut(){
    sessionStorage.removeItem('key');
    this.route.navigate([`login`]);
  };
  filterData(): void {
    if (this.searchText) {
      this.filteredData = this.data.filter(car => 
        car.maker.toLowerCase().includes(this.searchText.toLowerCase()) || 
        car.model.toLowerCase().includes(this.searchText.toLowerCase()) || 
        car.rentalPrice.toString().includes(this.searchText)
      );
    } else {
      this.filteredData = this.data;
    }
  }
}

  


