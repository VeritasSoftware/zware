import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { UserProfile } from '../../models/models';
import { UserProfileService } from '../../services/user.profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;
  submitted = false;

  @Input()
  userId: number;
  @Output()
  profileModified = new EventEmitter();
  @Output()
  profileCreate = new EventEmitter();

  profile: UserProfile = new UserProfile();

  get f() { return this.profileForm.controls; }

  constructor(private service: UserProfileService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      displayName: ['', [Validators.required]],
      desc: [''],
      dept: [''],
      team: ['']
    });    
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
    this.profileCreate.emit();
  }

  save() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
        return;
    }

    this.service.setProfile(this.profile).subscribe(x => {
      this.submitted = false;
      alert('Profile saved successfully!');
      this.profileModified.emit();      
    });    
  }
}
