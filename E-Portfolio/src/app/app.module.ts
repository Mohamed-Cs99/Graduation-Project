import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntensiveCareComponent } from './intensive-care/intensive-care.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { AnaetheticComponent } from './anaethetic/anaethetic.component';
import { PendingAccountsListComponent } from './pending-accounts-list/pending-accounts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    IntensiveCareComponent,
    ProcedureComponent,
    AnaetheticComponent,
    PendingAccountsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
