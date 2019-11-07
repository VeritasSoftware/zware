import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
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
  @Output()
  profileModified = new EventEmitter();

  profile: UserProfile = new UserProfile();

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

  create() {
    this.profile = new UserProfile();
  }

  save() {
    this.service.setProfile(this.profile).subscribe(x => {
      this.profileModified.emit();
    });    
  }
}
