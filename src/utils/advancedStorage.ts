class AdvancedStorage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  public setLocal(value: any) {
    localStorage.setItem(this.key, value);
  }

  public getLocal() {
    return localStorage.getItem(this.key);
  }
}

export default AdvancedStorage;
