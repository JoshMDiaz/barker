export interface ProfileModel {
  name: string;
  description: string;
  city: string;
  state: string;
  photo: string;
  dogs: Array<string>;
  introComplete: boolean;
}
