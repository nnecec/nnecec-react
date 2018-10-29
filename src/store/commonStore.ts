import { observable, action, reaction } from 'mobx'
import AdvancedStorage from '../utils/advancedStorage'
export class CommonStore {
  storage: AdvancedStorage

  @observable viewHeight: any
  @observable locale: string
  @observable isLoader: boolean = false

  constructor() {
    this.storage = new AdvancedStorage('lang')
    this.locale = this.storage.getLocal() || navigator.language || 'en-US'
  }

  @action
  setViewHeight = (height: number) => {
    this.viewHeight = height
  }

  @action
  setLocale = (lang: string) => {
    this.locale = lang
  }

  @action
  setLoader = () => {
    this.isLoader = true
  }
}

export default new CommonStore()
