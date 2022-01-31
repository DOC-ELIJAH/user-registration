import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

// import { environment } from 'src/environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class AppServicesService {
  
private apiUrl = 'http://localhost:8080/api/v1/save';
  httpClient: any;

  constructor(private http : HttpClient) { }

  createUser(user: User){
   // return this.httpClient.post(`${this.apiUrl}`, user);\
   //console.log(`${environment.appUrl}`)
   return this.http.post<User>(this.apiUrl, user);
    //return this.http.post<any>();
    // return this.http.post(`${this.apiUrl}`, user)
  }
}

