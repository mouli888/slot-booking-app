import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(userName: string, password: string){
    this.http.get("http://localhost:8001/user/login/"+userName,{
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      }
    }).subscribe(response => {
      console.log(response);
    })
  }
}
