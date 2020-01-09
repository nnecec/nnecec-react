import AdvancedStorage from '../utils/advancedStorage'

const storage = new AdvancedStorage('lang')

type Tcommon = number | boolean | Function | string;

const common = (): Record<string, Tcommon> => {
  return {
    viewHeight: 0,
    locale: storage.getLocal() || navigator.language || 'en-US',
    isLoader: false,
    setViewHeight (height: number): void {
      this.viewHeight = height
    },
    setLocale (lang: string): void {
      this.locale = lang
    },
    setLoader (): void {
      this.isLoader = true
    }
  }
}

export default common
