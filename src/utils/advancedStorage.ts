class AdvancedStorage {
  key: string;

  constructor (key: string) {
    this.key = key
  }

  public setLocal (value: any): void {
    localStorage.setItem(this.key, value)
  }

  public getLocal (): string|null {
    return localStorage.getItem(this.key)
  }
}

export default AdvancedStorage
