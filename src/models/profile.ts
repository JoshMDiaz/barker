export interface Profile {
  name: string;
  description: string;
  phone: string;
  city: string;
  state: string;
  numberOfDogs: number;
  photo: string;
  dogs: Array<{
    name: string;
    age: number;
    breed: string;
    gender: string;
    neutered: boolean;
    papered: boolean;
    registered: boolean;
    photos: Array<string>;
  }>;
}
