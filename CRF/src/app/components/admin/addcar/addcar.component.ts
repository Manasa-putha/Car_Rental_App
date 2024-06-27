import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit{
  addCarForm!: FormGroup;
  // fileToUpload!: File | null;
  car:Car={} as Car;
  constructor(
    private fb: FormBuilder,
    public service:CarService,
    public auth:AuthService,
    public toast:ToastService,
    private router: Router
  ){}
  imageUrl : string = './../../../assets/img/default.png';
  ngOnInit(): void {
    this.addCarForm = this.fb.group({
      Model: ['', Validators.required],
      Maker: ['', Validators.required],
      Description: ['', Validators.required],
      RentalPrice: ['', [Validators.required, Validators.min(0)]],
      Rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      Avaialblity: [true, Validators.required],
      Image: [null] // No initial image selected
    });
  }
  // handleFileInput(event: any): void {
  //   const files = event.target.files as FileList;
  //   if (files && files.length > 0) {
  //     const file = files.item(0);
  //     if (file) {
  //       this.addCarForm.patchValue({ Image: file });
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         this.imageUrl = reader.result as string;
  //       };
  //     }
  //   }
  // }

  onSubmit(): void {
    if (this.addCarForm.valid) {
      const carData: Car = this.addCarForm.value;
      this.service.addCar(carData).subscribe(
        () => {
          alert('Car added successfully');
          this.router.navigate(['/home']); 
        },
        error => {
          alert('Failed to add car');
          console.error(error);
        }
      );
    } else {
      alert('Please fill out all required fields.');
    }
  }
}