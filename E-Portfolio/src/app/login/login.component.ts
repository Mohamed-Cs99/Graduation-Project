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
  loginError: string = '';
  constructor(
    private _Router: Router,
    private _ProjectServiceService: ProjectServiceService
  ) {}
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9]{9,15}$'),
    ]),
  });
  submitLoginForm(loginForm: FormGroup) {
    this._ProjectServiceService.Login(loginForm.value).subscribe((response) => {
      if (response.error == 'Unauthorized') {
        alert('Unauthorized Account');
      } else if (response.user.pending == 0) {
        localStorage.setItem("userToken",response.access_token);
        this._ProjectServiceService.saveCurrentUser();
        this._Router.navigate(['/home']);
      } else if (response.user.pending == 1) {
        alert('Account is Pending');
      }

      //  else h3ml error Message ... bs kda
    });
  }

  goToRegisterPage() {
    this._Router.navigate(['/registration']);
  }
}
