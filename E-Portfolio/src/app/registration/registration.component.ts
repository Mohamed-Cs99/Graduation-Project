import { ValidationService } from './../validation.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,AbstractControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  // error: string = '';
  
  
  constructor(
    private _ProjectServiceService: ProjectServiceService,
    private _Router: Router,
    private _ValidationService:ValidationService
  ) {}

 
  registerForm = new FormGroup(
    {
    Name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(
        '^[A-Za-z]{3,} [A-Za-z]{3,} [A-Za-z]{3,} [A-Za-z]{3,} ?$'
      ),
    ]),
    username: new FormControl(null, [Validators.required]),
    Resident_NID : new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{14}$'),
    ]),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9]{9,15}$'),
    ]),
    confirmationPass: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9]{9,15}$'),
    ]),

    Birthdate: new FormControl(null, [Validators.required]),
    ResidencyYear: new FormControl(null, [Validators.required]),
    Gender: new FormControl(null, [Validators.required]),
  }
   ,this._ValidationService.passwordMatch('password','confirmationPass')
  );
  submitRegisterForm(registerForm: FormGroup) {
    this._ProjectServiceService.Regiseter(registerForm.value).subscribe((response)=>{
     if(response.message=="fail")
     {
      alert("Account Already Registered");  
     }
     else 
     {
       alert("Account Pending"); 
     }
    
    })
     
  }

  goToLoginPage()
  {
    this._Router.navigate(['/login'])
  }
  
}
