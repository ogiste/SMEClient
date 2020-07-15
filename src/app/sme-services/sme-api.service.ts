import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SmeApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  baseUrl = environment.api;

  constructor(
    private http: HttpClient,
  ) {
  }

  getMyInfo(token?): Observable<any> {
    if (token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }),
      };
    }
    return this.http
      .get(
        // Fetch leads using pull endpoint
        `${this.baseUrl}/users/me`,
        this.httpOptions,
      )
      .pipe(
        tap((userInfo) => {
          return userInfo;
        }),
      );
  }
  createBusiness(businessInfo) {
  }
  updateBusiness(businessInfo) {
  }
  viewSingleBusiness(id) {
  }
  listBusinesses(id) {
  }
}
