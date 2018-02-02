export interface ProfileModel {
  name: string;
  description: string;
  city: string;
  state: string;
  numberOfDogs: number;
  photo: string;
  dogs: Array<{
    name: string;
    breed: string;
    gender: string;
    eyes: string;
    fixed: boolean;
    papered: boolean;
    registered: boolean;
    description: string;
    birthdate: string;
    photos: Array<string>;
  }>;
}
