import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { ApiService } from 'src/app/services/api.service';
import { CarService } from 'src/app/services/car.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}

