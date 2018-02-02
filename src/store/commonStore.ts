import { observable, action, reaction } from 'mobx';
class CommonStore {

  @observable number = 0;
  @observable viewHeight;
  @observable locale = 'en-US';

  @action
  decrease = () => {
    this.number = this.number - 1;
  }

  @action
  increase = () => {
    this.number = this.number + 1;
  }

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
