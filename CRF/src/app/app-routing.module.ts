import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManagebookingComponent } from './components/admin/managebooking/managebooking.component';
import { UpdatecarComponent } from './components/admin/updatecar/updatecar.component';
import { CarbookComponent } from './components/carbook/carbook.component';
import { CarbookedComponent } from './components/carbooked/carbooked.component';
import { CarbookingComponent } from './components/carbooking/carbooking.component';
import { DashboardComponent } from './components/Home/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RentalAgrementsComponent } from './components/rental-agrements/rental-agrements.component';
import { SignupComponent } from './components/signup/signup.component';
import { adminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  // {path:'signup',component:SignupComponent},
  // {path:'home',component:DashboardComponent,canActivate :[AuthGuard]},
  // {path:'createcar',component: AddcarComponent},
  // {path:'admin',component:AdminComponent },
  // {path:'bookCar',component:CarbookingComponent},
  // {path:'managecar',component:ManagebookingComponent },
  // {path:'',redirectTo:'/home', pathMatch: 'full'}
  {
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{

  path: 'rentedcar',
  component: CarbookedComponent,
   canActivate:[AuthGuard]
},
{
  path: 'home',
  component: DashboardComponent,
   canActivate:[AuthGuard]
},
{
  path: 'renting/:id',
  component: CarbookComponent,
   canActivate:[AuthGuard]
},
{
  path:'admin',
  component:AdminComponent,
   canActivate:[AuthGuard,adminGuard]
},
{
path: 'aggrement',
component: RentalAgrementsComponent,

canActivate:[AuthGuard]
},

{
path: 'edit/:id',
component: UpdatecarComponent,
canActivate:[AuthGuard,adminGuard]
},
{
  path: 'addcar',
  component: AddcarComponent,
  canActivate:[AuthGuard,adminGuard]
  },

{
  path: '**',
  component: PagenotfoundComponent
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
