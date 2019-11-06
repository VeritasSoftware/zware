import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UserProfile } from '../../models/models';
import { UserProfileService } from '../../services/user.profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input()
  userId: number;
  
  profile: UserProfile;

  constructor(private service: UserProfileService) { }

  ngOnInit() {
    
  }
  
  getProfile(userId: number) {
    this.service.getProfile(userId).subscribe(x => {
      this.profile = x;
    });
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.userId.currentValue)
      this.getProfile(changes.userId.currentValue);
  }
}
