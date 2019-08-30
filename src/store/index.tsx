import React, { createContext, useContext } from 'react'
import { createStore, TStore } from './createStore'
import { useLocalStore } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0

const storeContext=createContext<TStore | null>(null)

export const StoreProvider: React.SFC=({ children }) => {
  const store=useLocalStore(createStore)
  return (<storeContext.Provider value={store}>{children}</storeContext.Provider>)
}

export const useStore=(): TStore => {
  const store=useContext(storeContext)

  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}