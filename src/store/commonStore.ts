import { observable, action, reaction } from 'mobx';

class CommonStore {

  @observable number = 0;

  @action
  decrease = () => {
    this.number = this.number - 1;
  }

  @action
  increase = () => {
    this.number = this.number + 1;
  }

}

export default new CommonStore();
