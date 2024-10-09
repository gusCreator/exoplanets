export default interface User {
  ussername: string;
  email: string;
  names: string;
  lastNames: string;
  photo: URL;
}

export interface UserBoxOptions {
  content: string;
  action: () => void;
}
