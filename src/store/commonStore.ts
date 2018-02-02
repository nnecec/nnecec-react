import { observable, action, reaction } from 'mobx';
class CommonStore {

  @observable viewHeight;
  @observable locale = 'en-US';

  @action
  setViewHeight = (height: number) => {
    this.viewHeight = height;
  }

  @action
  setLocale = (lang: string) => {
    this.locale = lang;
  }
}

export default new CommonStore();
