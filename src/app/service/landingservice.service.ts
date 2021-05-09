import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userservice } from './userservice';

@Injectable({
  providedIn: 'root'
})
export class LandingserviceService {

  constructor(private http:HttpClient) { }
  favourite:userservice[]=[];
  getUser(){
    return this.http.get('http://localhost:8080/api/v1/users');
   
  }
  search(user: any)
  {
    return this.http.get(`http://localhost:8080/api/v1/users/${user}`);
  }
}
