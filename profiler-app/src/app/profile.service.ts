import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from './env';

@Injectable({
  providedIn: 'root',
})
export class profileService {

  constructor(private http: HttpClient) {
  }

  public serverData: JSON;

  requestProfileData(userId, callback) {
    this.http.get(API_URL + '/profile/' + userId).subscribe(data => {
      this.serverData = data as JSON;
      callback(this.serverData);
    })
  }
}