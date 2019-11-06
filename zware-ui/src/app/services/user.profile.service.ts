import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserProfile } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
  usersUrl = `${environment.apiUrl}api/${environment.scopeKey}/profiles`;

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
    return this._http.post<UserProfile>(url, userProfile);
  }

}