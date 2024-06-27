import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  data: any;
  _isAdmin: boolean = false;
  user: any;
  constructor(private service: CarService, private route: Router) {
 

    if (localStorage.getItem('role') == 'Admin') {
      this._isAdmin = true;
      this.service.getAllAggrement().subscribe((_data: any) => {
        this.data = _data;
        console.log(this.data);
      });
    };
    console.log(this._isAdmin);

  }

  ngOnInit(): void {

  };
  logOut() {
    sessionStorage.removeItem('key');
    this.route.navigate([`login`]);
  };



  deleteAgreement(id: number) {
    this.service.deleteAgreement(id).subscribe({
      next: (response) => {
        this.route.navigate(['admin']);
      }
    });
  }
  acceptReturn(id: number) {
    this.service.acceptReturn(id).subscribe({
      next: (response) => {
        this.route.navigate(['admin']);
      }
    });
  }
}
