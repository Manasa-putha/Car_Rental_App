import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent implements OnInit  {

  _isAdmin: boolean =false;
  constructor(private route: ActivatedRoute, private service: CarService, private router: Router) { 

    if(localStorage.getItem('role') == 'Admin'){
      this._isAdmin = true;
    }; 
    console.log(this._isAdmin)
  
    
  }

  data: any;
  numOfDays: any = 1;
  amount: number = 0;
  totAmount: number | undefined;
  isComplete: boolean = false;
  car: any;
  vehicleNum: any;
  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.service.getAgreement(id).subscribe((_data) => {
        this.data = _data;
        this.vehicleNum = _data[0].carId;

        const cId = this.vehicleNum;
        console.log(cId)
        this.service.getData(cId).subscribe((data) => {
          this.car = data;
          console.log(this.car);
        });

      });
    };


  }
  
logOut(){
  sessionStorage.removeItem('key');
  this.router.navigate([`login`]);
};
  calcPrice() {
    console.log(this.numOfDays,this.car.rentalPrice)
    this.totAmount = this.numOfDays * this.car.rentalPrice;
    console.log(this.totAmount);
  }
  isComlete : boolean = false;
  onSubmit() {
    this.service.updateAgreement(this.aId,[this.numOfDays,(this.numOfDays*this.car.rentalPrice)]).subscribe(res => {

      if (res == 'Failure') {
        this.isComplete = false;
        alert('Failed');
      }
      else {
        this.isComplete = true;
        alert('done');
        this.router.navigate(['/admin']);

      }
    });

  }


  updateAgreementForm = new FormGroup({
    days: new FormControl("", [Validators.required])
  })



  aId = this.route.snapshot.params['id'];

  deleteAgreement(id: number) {
    this.service.deleteAgreement(id).subscribe({
      next: (response) => {
        this.router.navigate(['aggrement']);
      }
    });
  }

}
