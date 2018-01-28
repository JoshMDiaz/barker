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
    fixed: boolean;
    papered: boolean;
    registered: boolean;
    description: string;
    photos: Array<string>;
  }>;
}
