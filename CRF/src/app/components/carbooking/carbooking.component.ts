import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, User } from 'src/app/models/car.model';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';
import { DatePipe } from '@angular/common';
// import * as $ from 'jquery';
// import 'bootstrap';

@Component({
  selector: 'app-carbooking',
  templateUrl: './carbooking.component.html',
  styleUrls: ['./carbooking.component.css']
})
export class CarbookingComponent  {
 
}
