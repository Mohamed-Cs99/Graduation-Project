import { AnaetheticComponent } from './anaethetic/anaethetic.component';
import { IntensiveCareComponent } from './intensive-care/intensive-care.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProcedureComponent } from './procedure/procedure.component';

const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'registration',component:RegistrationComponent},
 {path:'login',component:LoginComponent},
 {path:'intensiveCare',component:IntensiveCareComponent},
 {path:'procedure',component:ProcedureComponent},
 {path:'anaethetic',component:AnaetheticComponent},
 {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
