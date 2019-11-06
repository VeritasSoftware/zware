import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../models/models';
import { UserProfileService } from '../../services/user.profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userId: number;
  
  constructor() { }

  ngOnInit() {
  }

  setUserId(userId: string) {
    this.userId = +userId;
  }
}
