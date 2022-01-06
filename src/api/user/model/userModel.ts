export interface LoginParams {
  username: string;
  password: string;
}
export interface LoginResultModel {
  userId: string | number;
  token: string;
  accessToken: string;
}
