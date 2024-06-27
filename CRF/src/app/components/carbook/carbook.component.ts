import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/car.model';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-carbook',
  templateUrl: './carbook.component.html',
  styleUrls: ['./carbook.component.css']
})
export class CarbookComponent  implements OnInit{
  rentingForm!: FormGroup;
  // id: any;
  _isAdmin: boolean =false;
  user:User ={} as User;
  car: any;

  numOfDays: number = 1;
  amount: number = 0;
  totAmount: number = 1;
  isComplete: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private service: CarService,
    private toast: ToastService) { 
      this._isAdmin =this.service.getAdminValue(); 
      this.rentingForm = this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        days: [{value: '', disabled: true}, Validators.required]
      });
          // Recalculate days whenever startDate or endDate changes
    this.rentingForm.get('startDate')?.valueChanges.subscribe(() => this.calculateDays());
    this.rentingForm.get('endDate')?.valueChanges.subscribe(() => this.calculateDays());
    }


  ngOnInit(): void {

    const carId = this.route.snapshot.params['id'];
    this.service.getData(carId).subscribe((data) => {
      this.car = data;
      console.log(this.car);
    });
  }

  reningForm = new FormGroup({
    days: new FormControl("", [Validators.required]),
  });


  get startDate() {
    return this.rentingForm.get('startDate');
  }

  get endDate() {
    return this.rentingForm.get('endDate');
  }

  get days() {
    return this.rentingForm.get('days');
  }
  calculateDays() {
    const startDateValue = this.startDate?.value;
  const endDateValue = this.endDate?.value;

  if (startDateValue && endDateValue) {
    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);

    if (startDate <= endDate) {
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      this.rentingForm.patchValue({ days: diffDays });
    } else {
      this.rentingForm.patchValue({ days: 0 });
    }
  } else {
    this.rentingForm.patchValue({ days: 0 });
  }
  }


  // calcPrice() {
  //   this.totAmount = this.numOfDays * this.car.rentalCost;
  //   console.log(this.totAmount);
  // }
  calcPrice() {
    const days = this.rentingForm?.get('days')?.value;
    if (days > 0) {
      this.totAmount = days * this.car.rentalPrice;
    } else {
      this.totAmount = 0;
    }
  }

  onSubmit() {
    // this.toast.showInfo("Are you sure after clicking on accept you cannot edit ");
    if (confirm('Are you Sure?')) {
      this.finalSubmit();
    }
    else {
      //
    }
  }

  finalSubmit() {
    console.log([this.rentingForm.value.days], [this.car.vehicleNo, this.car.vehicleModel, this.car.vehicleMaker, this.totAmount]);
    const userId = this.authService.getCurrentUserId();
    if(userId!=undefined){
      const rentalInfo ={
        days:this.days?.value,
       carId: this.car.id,
       vehicleModel: this.car.model,
       vehicleMaker: this.car.maker,
       totalCost:this.totAmount,
       rentalStartDate:this.rentingForm.value.startDate,
       rentalEndDate:this.rentingForm.value.endDate, 
       userId:userId

      };
      this.service.rentalSubmit(rentalInfo).subscribe(res =>{
        if (res === 'Failure') {
          alert('Failed');
        } else {
          alert('done');
          this.router.navigate(['/aggrement']);
        }
      });
    } else {
      this.toast.showError("ERROR", "Unable to retrieve user ID.");
    }
  
  }
    
    // // this.service.rentalSubmit([this.rentingForm.value.days], [this.car.id, this.car.model, this.car.maker, this.totAmount,this.rentingForm.value.startDate,this.rentingForm.value.endDate, userId]).subscribe(res => {

    //   if (res == 'Failure') {
    //     this.isComplete = false;
    //     alert('Failed');
    //   }
    //   else {
    //     this.isComplete = true;
    //     alert('done');
    //     this.router.navigate(['/aggrement']);

    //   }
    // });

    

  get Days() {
    return this.rentingForm.get("days") as FormControl;
  }
}

