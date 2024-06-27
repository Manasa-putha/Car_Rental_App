export interface CarModel{
    totalrecords : number;
    page : number  ;
    list : Car[]
   
}
export interface User
{
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    mobileNumber: string;
    password: string;
    userType: UserType;
    createdOn: string;
    token:number;
  
  
}
export enum UserType
{
    NONE, ADMIN, USER
}
export interface Car
{
    id: number;
    model: string;
    maker: string;
    rentalPrice: number;
    ordered: boolean;
    description:string;
    rating:number;
    avaliablityStatus: boolean;
    Image: File | null;
}
export interface Order
{
  id: number;
  userId: number;
  userName: string | null;
  carId: number;
  carName: string;
  borrowDate: string;
  returned: boolean;
  returnDate: string | null;
  finePaid: number;

  
}
