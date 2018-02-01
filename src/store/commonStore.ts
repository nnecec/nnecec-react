import { observable, action, reaction } from 'mobx';
class CommonStore {

  @observable number = 0;
  @observable viewHeight;

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
}

export default new CommonStore();
