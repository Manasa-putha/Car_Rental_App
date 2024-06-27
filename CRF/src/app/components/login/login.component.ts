import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { IsLoggedService } from 'src/app/services/is-logged.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { ToastService } from '../../services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  // public loginForm!: FormGroup;
  type: string ="password";
  isText: boolean = false;
  eyeIcon: string ='fa-eye-slash';
   loginForm! : FormGroup;
  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private router:Router,
    private toastService: ToastService,
    private userStore:UserStoreService,
    private service: CarService,
    private islogged:IsLoggedService
    ){ }
  ngOnInit(): void {
    this.loginForm =this.fb.group({
      // email:['',Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      password:['',Validators.required]
    })
    
  }
  hideShow(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type ='text':this.type ="password"
  }
  onLogin(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          // this.loginForm.reset();
           this.auth.storeToken(res.accessToken);
           this.auth.storeRefreshToken(res.refreshToken);
           const tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          const email_  = this.loginForm.value.email;
        const pass_ = this.loginForm.value.passs;
        // this.isUserValid = true;
        sessionStorage.setItem('key',email_);
        console.log( sessionStorage.setItem('key',email_));
        this.loginForm.reset();
        if(this.checkAdminStatus(email_) ){
          localStorage.setItem('role','Admin');
          this.service.setAdminValue(true);
          this.router.navigateByUrl('admin');
        }else{
          localStorage.setItem('role','User');
          this.service.setAdminValue(false);
          this.router.navigateByUrl('home');
      
        }
          this.toastService.showSuccess("login successfull");
          //  this.router.navigate(['home'])
        },
        error: (err) => {
          this.toastService.showError("ERROR","Something when wrong!");
          console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
      this.toastService.showWarning("your form is invalid");
    }
  }
  
  get Emails(){
    return this.loginForm.get("email") as FormControl;
  }
  
  get Passs(){
    return this.loginForm.get("passs") as FormControl;
  }
    checkAdminStatus(email:string):boolean{
      // if(this.islogged.isAdmin(String(sessionStorage.getItem('key')))){
      //   return true;
      // }
      // return false;
      return this.islogged.isAdmin(email);
      }
  
}

