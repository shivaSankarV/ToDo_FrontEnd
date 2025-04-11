import {ThemeProps} from '../styles/Colour';

export interface RootState {
  login: LoginState;
  theme: ThemeState;
  user: UserState;
}

interface UserState {
  user_id: string;
  user_token: string | null;
}
interface ThemeState {
  theme: string;
  AppColour: ThemeProps;
}
interface LoginState {
  token: string;
}
