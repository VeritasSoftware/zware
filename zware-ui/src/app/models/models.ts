export class UserProfile {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    description: string;
    department: string;
    team: string;
}

export class UserProfiles {
    constructor(profiles: UserProfile[]){

    }
}