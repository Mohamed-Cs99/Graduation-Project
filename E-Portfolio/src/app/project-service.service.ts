import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveCurrentUser();
    }
  }
  currentUser = new BehaviorSubject(null);
  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
  }

  Regiseter(formData: any): Observable<any> {
    //hb3t el FormData ll Api el f parameter One
    return this._HttpClient.post(
      'http://196.221.104.247:8000/api/auth/register',
      formData
    );
  }
  Login(formData: any): Observable<any> {
    //hb3t el FormData ll Api el f parameter One
    return this._HttpClient.post(
      'http://196.221.104.247:8000/api/auth/login',
      formData
    );
  }

  Logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }

  getSharedData(): Observable<any> {
    return this._HttpClient.get(`http://196.221.104.247:8000/api/shared`);
  }

  getProcedurData(): Observable<any> {
    return this._HttpClient.get(`http://196.221.104.247:8000/api/procedure`);
  }
  getIntensiveData(): Observable<any> {
    return this._HttpClient.get(`http://196.221.104.247:8000/api/intensive`);
  }
  getAnetheticData(): Observable<any> {
    return this._HttpClient.get(`http://196.221.104.247:8000/api/anesthetic`);
  }

  getPendingAccounts():Observable<any>
  {
    return this._HttpClient.get(`http://196.221.104.247:8000/api/pendingAcc`); 
  }
}
