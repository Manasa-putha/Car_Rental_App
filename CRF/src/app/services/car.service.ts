import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) { }
  private isAuthenticated =false;

  private baseUrl: string = 'https://localhost:7275/api/Order/';
  private baseUrl1: string = 'https://localhost:7275/api/Car/';
  isAdminUser = false;

  setAdminValue(value:boolean){
    this.isAdminUser = value;
  }

  getAdminValue(){
    return this.isAdminUser;
  }

  loginUser(loginInfo: Array<any>){
    return this.http.post(this.baseUrl + 'LoginUser',{
      Email : loginInfo[0],
      Pswd : loginInfo[1],
      
    },
    {
      responseType:"text",
    });
  }

  rentalSubmit(rentingInfo:any): Observable<any>{
    return this.http.post(this.baseUrl+'RentalAgrement',{
      Email : sessionStorage.getItem('key'),
      Days : rentingInfo.days,
      CarId : rentingInfo.carId,
      VehicleModel: rentingInfo.vehicleModel,
      VehicleMaker: rentingInfo.vehicleMaker,
      TotalCost : rentingInfo.totalCost,
      RentalStartDate:rentingInfo.rentalEndDate,
      RentalEndDate:rentingInfo.rentalEndDate,
      Avaialbility : false,
      UserId:  rentingInfo.userId  })
  }
  getAllData() {
    return this.http.get(
      this.baseUrl + "AllData"
    );
  };


  getData(id:number): Observable<any>{
    return this.http.get(
      `${this.baseUrl}CarDetials/${id}`
    );
  }

  getUserData(){
    return this.http.get(
      this.baseUrl + "GetUserData"
    );
  };

  getUser(id:number): Observable<any>{
    return this.http.get(
      `${this.baseUrl}UserDetails/${id}`
    );
  };

  getUserDetials(email:any){
    return this.http.get(
      `${this.baseUrl}UserDetails/${email}`
    )
  }


  getAllAggrement(){
    return this.http.get(
      this.baseUrl+ "GetAllAggrement"
    );
  }



  getUserAggrement(): Observable<any>{
    let _email = sessionStorage.getItem("key");
    console.log(_email);
    return this.http.post(
      `${this.baseUrl}GetUserAggrement`,{emails:_email},{responseType:'text'}
    );
  }
  
  getAgreement(id:number): Observable<any>{
    return this.http.get(
      `${this.baseUrl1}GetAgreement/${id}`
    ); 
  }

  updateAgreement(id:number,agreement:Array<any>){
   return this.http.put(
    `${this.baseUrl1}UpdateAgreement/${id}`,{
      Day:agreement[0],
      tRent:agreement[1]
    }
   );
  }
deleteAgreement(id:number):Observable<any>{
  return this.http.delete(
    `${this.baseUrl1}DeleteAgreement/${id}`
  );
}

pushReturn(id:number):Observable<any>{
  return this.http.get(
    `${this.baseUrl1}pushReturn/${id}`
  );
}

acceptReturn(id:number):Observable<any>{
  return this.http.get(
    `${this.baseUrl1}acceptReturn/${id}`
  );
}
addCar(car: Car) {
  return this.http.post(this.baseUrl1 + 'AddCar', car);
}

// uploadCarImage(file: File) {
//   const formData: FormData = new FormData();
//   formData.append('file', file, file.name);
//   return this.http.post(this.baseUrl1 + '/cars/uploadImage', formData);
// }
// addCar(car: Car): Observable<any> {
//   const formData: FormData = new FormData();
//   formData.append('Name', car.model);
//   formData.append('Maker', car.maker);
//   formData.append('Description', car.description);
//   formData.append('Price', car.rentalPrice.toString());
//   formData.append('Rating', car.rating.toString());
//   formData.append('Availability', car.avaliablityStatus.toString());
//   if (car.Image) {
//     formData.append('Image', car.Image, car.Image.name);
//   }

//   return this.http.post(`${this.baseUrl1}AddCar`, formData);
// }
}
