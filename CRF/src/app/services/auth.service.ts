import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt'
import { TokenApiModel } from '../models/token-api.model';
// import { TokenApiModel } from '../models/token-api.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'https://localhost:7275/api/Auth/';
  private userPayload:any;
  constructor(
  
    private http:HttpClient,
     private router: Router) { 
      this.userPayload = this.decodedToken();
  }
  signUp(userobj:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}register`,userobj)
  }
  login(userobj:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}login`,userobj)
  }
  

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }
  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  getRefreshToken(){
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getfullNameFromToken(){
    if(this.userPayload)
    return this.userPayload.name;
  }

  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.role;
  }

  renewToken(tokenApi : TokenApiModel){
    return this.http.post<any>(`${this.baseUrl}refresh`, tokenApi)
  }
  getCurrentUserId(): number {
    // Implement your logic to retrieve the current user ID, possibly from the token or session
    const tokenPayload = this.decodedToken();
     return tokenPayload.nameid;
  //   if (tokenPayload && tokenPayload.nameid) {
  //     return parseInt(tokenPayload.nameid, 10); // Adjust this to match the claim name for userId
  //   }
  //   return 0;
   }
  }
  

