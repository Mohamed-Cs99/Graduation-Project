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

  submitRegisterForm(registerForm: FormGroup) {
    this._ProjectServiceService
      .Regiseter(registerForm.value)
      .subscribe((response) => {
        if (response.message == 'success') {
          this._Router.navigate(['/login']);
        } else {
        }
      });
  }
  registerForm = new FormGroup(
    {
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(
        '^[A-Za-z]{3,} [A-Za-z]{3,} [A-Za-z]{3,} [A-Za-z]{3,} ?$'
      ),
    ]),
    userName: new FormControl(null, [Validators.required]),
    nationalId: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{14}$'),
    ]),
    mail: new FormControl(null, [Validators.required, Validators.email]),
    pass: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9]{9,15}$'),
    ]),
    rePass: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9]{9,15}$'),
    ]),

    bDate: new FormControl(null, [Validators.required]),
    resYear: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  }
   ,this._ValidationService.passwordMatch('pass','rePass')
  );

  goToLoginPage()
  {
    this._Router.navigate(['/login'])
  }
  
}
