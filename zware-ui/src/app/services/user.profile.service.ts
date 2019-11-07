import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserProfile } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
  usersUrl = `${environment.apiUrl}api/${environment.scopeKey}/profiles`;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   })
  // };

  httpOptions = {
    headers: {
      'Content-Type':  'application/json'
    }
  };

  constructor(private _http: HttpClient) { }

  getProfile(id: number): Observable<UserProfile> {
    var url = `${this.usersUrl}/${id}`
    return this._http.get<UserProfile>(url);
  }

  getProfiles(): Observable<UserProfile[]> {
    var url = `${this.usersUrl}`
    return this._http.get<Array<UserProfile>>(url);
  }

  setProfile(userProfile: UserProfile): Observable<UserProfile> {
    var url = `${this.usersUrl}`
    if (userProfile.userId > 0)
    {
      url = `${url}/${userProfile.userId}`
      return this._http.put<UserProfile>(url, userProfile, this.httpOptions);
    }
    else {
      return this._http.post<UserProfile>(url, userProfile, this.httpOptions);
    }    
  }

}