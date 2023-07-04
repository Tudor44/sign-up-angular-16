import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, switchMap } from 'rxjs';
import {User} from '../model/user.model';
import { PhotoResponse } from '../model/photo-response.model';
import {SignupData} from '../model/signup-data.model'

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  constructor(private http: HttpClient) { }
   prefixUrl = `https://jsonplaceholder.typicode.com/`;

  callService(data: any): Observable<any> {
    const dataObj = data as SignupData;
    const url = this.prefixUrl+`photos/${dataObj.lastName.length}`; 
    console.log("First request " + url);
    return this.http.get(url).pipe(
      switchMap(response => {
        console.log("First response");
        console.log(response);
        const respObj : PhotoResponse =  response as PhotoResponse;
        const user : User = {} as User;
        user.firstName = dataObj.firstName;
        user.lastName = dataObj.lastName;
        user.email = dataObj.email;
        user.thumbnailUrl = respObj.thumbnailUrl;
        console.log("Second request");
        console.log(user);
        const url = this.prefixUrl+`users/`;
        return this.http.post(this.prefixUrl+`users/`, user);
      })
    );

    }
  }
