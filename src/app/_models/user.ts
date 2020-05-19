import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    phoneNumber: number;
    photoUrl: string;
    gender: string;
    lastActive: Date;
    created: Date;
    city: string;
    country: string;
    introduction?: string;
    lookingFor?: string;
    interests?: string;
    photos?: Photo[];
}
