import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
//import  CryptoJS from 'crypto-js';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Gethisto() {
    throw new Error('Method not implemented.');
  }

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', 'Bearer ' + localStorage.getItem('access_token') || '');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}

  // Get all users
 GetUsers() {
  return this.http.get(`${this.endpoint}`);
}

gethisto(){ //recupérer toutes les données pour l'historique

  return this.http.get(`${this.endpoint}/donne`)
}


  // Sign-in


   signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/signin`, user)
      // .pipe(map(user => {
      //   // store user details and jwt token in local storage to keep user logged in between page refreshes
      //   console.log(user)
      //   localStorage.setItem('id', user._id);
      //   return user;
      // }));
  }
   //Update mdp
   updatepass(id: any, data: any): Observable<any> {


    return this.http.patch(`${this.endpoint}/updatepassword/${id}`,
    {"ancienpassword": data.ancienpassword,
  "newpassword":data.newpassword})


  }



  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }


  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }




}

