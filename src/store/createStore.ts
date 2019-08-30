import common from './common'

export function createStore (): any {
  // note the use of this which refers to observable instance of the store
  return {
    common: common()
  }
}

export type TStore=ReturnType<typeof createStore>
