import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserProfile } from '../../models/models';
import { UserProfileService } from '../../services/user.profile.service';
import { UserProfilesComponent } from '../user-profiles/user-profiles.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userId: number;
  refresh: Date;
  
  constructor() { }

  ngOnInit() {
  }

  setUserId(userId: string) {
    this.userId = +userId;
  }

  refreshList() {
    this.refresh= new Date();
  }

}
