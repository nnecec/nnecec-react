import React, { createContext, useContext } from 'react'
import { createStore, TStore } from './createStore'
import { useLocalStore } from 'mobx-react-lite'

const storeContext = createContext<TStore | null>(null)

type StoreProviderProps = {
  children: React.ReactElement;
};

export const StoreProvider: React.FC = (props: StoreProviderProps) => {
  const store = useLocalStore(createStore)
  return (
    <storeContext.Provider value={store}>
      {props.children}
    </storeContext.Provider>
  )
}

export const useStore = (): TStore => {
  const store = useContext(storeContext)

  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}
