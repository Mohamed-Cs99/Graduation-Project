import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(
    private _Router: Router,
    private _ProjectServiceService: ProjectServiceService
  ) {}
  loginForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    pass: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9]{9,15}$'),
    ]),
  });
  submitLoginForm(loginForm: FormGroup) {
    this._ProjectServiceService.Login(loginForm.value).subscribe((response)=>
    {
     // El Mafrood ashoof el response rag3 ezay 
     // LW response.message=='success' 
     // roo7 el home ...
     
     // else h3ml error Message ... bs kda 
    })
  }

  goToRegisterPage() {
    this._Router.navigate(['/registration']);
  }
  // hna yro7 ll home moa2tn l7d m al Api tghz w nzbtha 7sb el response 
  goToHomePage() {
    this._Router.navigate(['/home']);
  }
}
