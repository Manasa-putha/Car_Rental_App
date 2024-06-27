import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, Order } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import{ApiService} from 'src/app/services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listofcars',
  templateUrl: './listofcars.component.html',
  styleUrls: ['./listofcars.component.css']
})
export class ListofcarsComponent implements OnInit {
  ngOnInit(): void {
   
  }


}
