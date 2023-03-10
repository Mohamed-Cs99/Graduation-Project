import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'registration',component:RegistrationComponent},
 {path:'login',component:LoginComponent},
 {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
