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
  private userData;
  private showSearchForm = true;
  private showLoadingSpinner = false;
  private showProfileAnalysis = false;

  constructor(private profileServiceRef: profileService) { }

  ngOnInit() {
  }

  doSearch() {
    this.showSearchForm = false;
    this.showLoadingSpinner = true;
    let this_ = this;
    this.profileServiceRef.requestProfileData(this.userId, function (userData) {
      this_.showLoadingSpinner = false;
      this_.showProfileAnalysis = true;
      this_.userData = userData;
      console.log(this_.userData);
    });
  }

}
