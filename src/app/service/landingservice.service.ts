import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingserviceService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get('http://localhost:8080/api/v1/users');
   
  }
  search(user: any)
  {
    return this.http.get(`http://localhost:8080/api/v1/users/${user}`);
  }
}
