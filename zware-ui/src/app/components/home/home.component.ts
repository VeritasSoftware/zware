import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../models/models';
import { UserProfileService } from '../../services/user.profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profileSelected: UserProfile;
  
  constructor(private service: UserProfileService) { }

  ngOnInit() {
  }

  getProfile(userId: string) {
    this.service.getProfile(+userId).subscribe(x => {
      this.profileSelected = x;
    });
  }
}
