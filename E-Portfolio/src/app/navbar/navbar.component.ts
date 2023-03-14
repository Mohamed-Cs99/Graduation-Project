import { Component } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(private _ProjectServiceService: ProjectServiceService) {
    this._ProjectServiceService.currentUser.subscribe(() => {

      if(_ProjectServiceService.currentUser.getValue()!=null)
      {
        this.isLogin=true ;
      }
      else 
      {
        this.isLogin=false ;
      }
    });
  }
}
