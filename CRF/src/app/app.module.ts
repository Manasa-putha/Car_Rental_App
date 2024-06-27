import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/Home/dashboard.component';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { ToastService } from './services/toast.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UpdatecarComponent } from './components/admin/updatecar/updatecar.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { ManagebookingComponent } from './components/admin/managebooking/managebooking.component';
import { CarbookingComponent } from './components/carbooking/carbooking.component';
import { FilterComponent } from './components/Home/filter/filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListofcarsComponent } from './components/Home/listofcars/listofcars.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { RentalAgrementsComponent } from './components/rental-agrements/rental-agrements.component';
import { CarbookedComponent } from './components/carbooked/carbooked.component';
import { CarbookComponent } from './components/carbook/carbook.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FilterPipe } from './services/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddcarComponent,
    ManagebookingComponent,
    CarbookingComponent,
    FilterComponent,
    ListofcarsComponent,
    UpdatecarComponent,
    AdminComponent,
    NavbarComponent,
    PagenotfoundComponent,
    RentalAgrementsComponent,
    CarbookedComponent,
    CarbookComponent,
    FilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({ positionClass: 'inline' }),
    NgxPaginationModule,
   
   
    
  ],
  providers: [ 
    provideAnimations(), 

    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true} ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
