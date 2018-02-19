export interface DogModel {
  name: string;
  breed: string;
  gender: string;
  eyes: string;
  fixed: boolean;
  couldBreed: boolean;
  papered: boolean;
  registered: boolean;
  description: string;
  birthdate: string;
  ownerId: string;
  photos: Array<string>;
  profileImg: string;
}
