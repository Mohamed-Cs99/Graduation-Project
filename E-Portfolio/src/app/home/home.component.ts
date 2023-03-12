import { Component } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   
  constructor(private _Router:Router){}
  goToIntensiveCarePage() {
    this._Router.navigate(['/intensiveCare']);
  }
  goToProcedure() {
    this._Router.navigate(['/procedure']);
  }
  goToAnaethetic() {
    this._Router.navigate(['/anaethetic']);
  }
}
