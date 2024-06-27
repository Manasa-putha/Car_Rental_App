import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Car, User } from '../models/car.model';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  startdate = null;
  enddate = null;
  carIdForBooking = 0;
  bookNowButtonControl : boolean = false;
  list: Car[] = [];
  private baseUrl: string = 'https://localhost:7275/api/Car/';
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  updateCarList() {
    this.getCars().subscribe((cars) => {
      this.list = cars;
    });
  }

  getFilteredCars(maker?: string, model?: string, rentalPrice?: number): Observable<Car[]> {
    let params = new HttpParams();
    if (maker) params = params.append('maker', maker);
    if (model) params = params.append('model', model);
    if (rentalPrice) params = params.append('rentalPrice', rentalPrice.toString());

    return this.http.get<Car[]>(`${this.baseUrl}filter`, { params });
  }
   // Example method to fetch selected car details
   getSelectedCar(carId: number): Observable<Car> {
    const url = `${this.baseUrl}GetcarById/${carId}`;

    return this.http.get<Car>(url)
   
  }
  
   bookCar(bookingDetails: any): Observable<any> {
    const url = `${this.baseUrl}BookCar`; 
    return this.http.post<any>(url, bookingDetails)
  
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }

  getCarById(carId: string): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/cars/${carId}`);
  }
  getData(id:number): Observable<any>{
    return this.http.get(
      `${this.baseUrl}GetcarById/${id}`
    );
  }
  rentalSubmit(rentingInfo:Array<any>,carDetails:Array<any>){
    return this.http.post(this.baseUrl+'RentalAggrement',{
      Email : sessionStorage.getItem('key'),
      Days : rentingInfo[0],
      VehicleNo : carDetails[0],
      VehicleModel: carDetails[1],
      VehicleMaker: carDetails[2],
      RentalCost : carDetails[3],
      Avaialbility : false,
    })
  }

}
