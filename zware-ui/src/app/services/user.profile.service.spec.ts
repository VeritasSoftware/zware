import { TestBed, async, inject } from '@angular/core/testing';
import { UserProfileService } from './user.profile.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { UserProfile } from '../models/models';

describe('User Profile Service', () => {
    let service: UserProfileService;
    let httpMock: HttpTestingController;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          HttpClientModule
        ],
        providers: [
          UserProfileService
        ],
      });
    }));
  
    it('should be created', inject([HttpTestingController, UserProfileService],
        (httpMock: HttpTestingController, apiService: UserProfileService) => {
          expect(apiService).toBeTruthy();
        }
      )        
    );
    
    it('should get user profiles', inject([HttpTestingController, UserProfileService],
        (httpMock: HttpTestingController, apiService: UserProfileService) => {
            const dummyProfiles: UserProfile[] = [
                {
                    "userId": 1,
                    "email": "a@b.com",
                    "firstName": "xyz",
                    "lastName": "abc",
                    "displayName": "xABC",
                    "description": "Test",
                    "department": "Test",
                    "team": "Test"
                  },
                  {
                    "userId": 2,
                    "email": "a@b.com",
                    "firstName": "abc",
                    "lastName": "xyz",
                    "displayName": "aXYZ",
                    "description": "Test",
                    "department": "Test",
                    "team": "Test"
                  }
            ];

            apiService.getProfiles().subscribe(profiles => {
                expect(profiles.length).toBe(2);
                expect(profiles).toEqual(dummyProfiles);
            });
            const request = httpMock.expectOne( `${apiService.usersUrl}`);
            expect(request.request.method).toBe('GET');
            request.flush(dummyProfiles);
        }
      )        
    );
  });