import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {API_URL} from './env';

@Injectable({
  providedIn: 'root',
})
export class profileService {

  constructor(private http: HttpClient) {
  }

  public userId = 'shariq1989';
  public serverData: JSON;

  requestProfileData() {
    this.http.get(API_URL + '/profile/' + this.userId).subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }
}