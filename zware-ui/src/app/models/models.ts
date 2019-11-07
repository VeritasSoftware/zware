export class UserProfile {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    description: string;
    department: string;
    team: string;
    isSelected: boolean;
}

export class UserProfiles {
    constructor(profiles: UserProfile[]){

    }
}