import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  constructor(private _HttpClient:HttpClient) { }

  Regiseter(formData:any):Observable<any>
  {
    //hb3t el FormData ll Api el f parameter One 
    return this._HttpClient.post('',formData);
  }
  Login(formData:any):Observable<any>
  {
    //hb3t el FormData ll Api el f parameter One 
    return this._HttpClient.post('',formData);
  }
}
