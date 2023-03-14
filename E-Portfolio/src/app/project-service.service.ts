import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  constructor(private _HttpClient: HttpClient) {}
  currentUser = new BehaviorSubject(null);
  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
    
  }

  Regiseter(formData: any): Observable<any> {
    //hb3t el FormData ll Api el f parameter One
    return this._HttpClient.post(
      'http://102.190.125.172:8000/api/auth/register',
      formData
    );
  }
  Login(formData: any): Observable<any> {
    //hb3t el FormData ll Api el f parameter One
    return this._HttpClient.post(
      'http://102.190.125.172:8000/api/auth/login',
      formData
    );
  }
}
