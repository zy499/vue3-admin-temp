import { defHttp } from '/@/libs/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/auth/login',
  Logout = '/auth/logout',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp.post<LoginResultModel>({
    url: Api.Login,
    params,
  });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
