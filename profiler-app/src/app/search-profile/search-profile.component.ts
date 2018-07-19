import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {

  public userId = 'shariq1989';

  constructor() { }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.userId);
  }

}
