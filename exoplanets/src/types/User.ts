export default interface User {
  username: string;
  email: string;
  names: string;
  lastNames: string;
  photo: string;
}

export interface UserBoxOptions {
  content: string;
  action: () => void;
}
