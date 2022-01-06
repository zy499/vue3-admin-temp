import { defineStore } from 'pinia';
import storage from 'store';
import UaParser, { IResult as UaResult } from 'ua-parser-js';
import router from '/@/router';
import { store } from '/@/store';

export interface UserInfo {
  id: string;
  token: string;
  name?: string;
  avatar?: string;
  roles?: string[];
}
export interface UserState {
  userInfo: UserInfo;
  ua: UaResult;
}

const defaultUserInfo = {
  id: '',
  token: '',
  name: '',
  avatar: '',
  roles: [],
};

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: { ...defaultUserInfo },
    ua: new UaParser().getResult(),
  }),
  actions: {
    setToken(token) {
      storage.set('ACCESS_TOKEN', token);
    },
    setUserInfo(payload: UserInfo) {
      this.userInfo = payload;
      storage.set('USER_ID', payload.id);
      this.setToken(payload.token);
    },
    resetUserInfo() {
      this.userInfo = { ...defaultUserInfo };
    },
    async getUserInfo() {
      const userID = storage.get('USER_ID');
      if (!userID) {
        // 异步调用查询用户信息接口
      }
    },
    async login() {
      // 调用登陆接口
      // this.setUserInfo(payload);
      // router.push({ path: '/' });
    },
    async logout() {
      // 调用退出登陆接口
      this.resetUserInfo();
      router.push({ name: 'Login' });
    },
    async verification(token: string) {
      // 调用 token 验证接口
      return Promise.resolve(token);
    },
  },
});

// 需要在设置之外使用
export function useUserStoreWithOut() {
  return useUserStore(store);
}
