import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { UserProfileService } from '../../services/user.profile.service';
import { UserProfile } from '../../models/models';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {

  profiles: UserProfile[];

  @Input()
  refresh: Date;

  @Input()
  selectedUserId: number;

  @Output() 
  profileSelected = new EventEmitter<string>();

  constructor(private service: UserProfileService) { }

  ngOnInit() {
    this.getProfiles();
  }  

  ngOnChanges(changes: SimpleChanges) {

    this.getProfiles();

    // if (changes.refresh.currentValue) {
      
    // }      
  }  

  getProfiles() {
    this.service.getProfiles().subscribe((x:UserProfile[]) => {      
      x.forEach(profile => {
        if (profile.userId == this.selectedUserId) {
          profile.isSelected = true;
        }
      });
      this.profiles = x;            
    });
  }

  open(userId: string) {
    this.profileSelected.emit(userId);
    this.getProfiles();
  }
}
