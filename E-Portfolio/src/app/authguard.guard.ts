import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectServiceService } from './project-service.service';
Router
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _ProjectServiceService:ProjectServiceService ,private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     {

      if(this._ProjectServiceService.currentUser.getValue()!=null)
      {
        return true ;
      }
      else 
      {
        this._Router.navigate(['/login']);
        return false;
      }
    
  }
  
}
