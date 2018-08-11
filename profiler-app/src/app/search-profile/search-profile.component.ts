import { Component, OnInit, Input, Output } from '@angular/core';
import {profileService} from '../profile.service';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  @Input()
  public userId = 'shariq1989';

  constructor(private profileServiceRef:profileService) { }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.userId);
    this.profileServiceRef.requestProfileData();
  }

}
