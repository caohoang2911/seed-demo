export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  userInfo: any;
  isLogin: boolean;
  token: string | null;
  loadingLogin: boolean;
}
