import { Component, OnInit, Input, Output } from '@angular/core';
import { profileService } from '../profile.service';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  @Input()
  public userId = 'shariq1989';
  private showSearchForm = true;
  private showLoadingSpinner = false;
  private showProfileAnalysis = false;
  public subredditArr = []

  constructor(private profileServiceRef: profileService) { }

  ngOnInit() {
  }

  backToHome() {
    this.showSearchForm = true;
    this.showLoadingSpinner = false;
    this.showProfileAnalysis = false;
  }

  doSearch() {
    this.showSearchForm = false;
    this.showLoadingSpinner = true;
    this.subredditArr = [];
    let this_ = this;
    this.profileServiceRef.requestProfileData(this.userId, function (userData) {
      this_.showLoadingSpinner = false;
      //the user must have cancelled the search
      if (this_.showSearchForm === false) {
        this_.showProfileAnalysis = true;
      }
      for (let sub in userData) {
        let subRedditObj = { name: sub, qty: userData[sub] }
        this_.subredditArr.push(subRedditObj);
      }
      console.log(this_.subredditArr);
    });
  }

}
