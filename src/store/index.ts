import { configureStore } from '@reduxjs/toolkit'
import currentMoneyReducer from './reducers/currentMoney'
import historyReducer from './reducers/history'
import availableTagReducer from './reducers/tags'

const store = configureStore({
  reducer: {
    currentMoney: currentMoneyReducer,
    history: historyReducer,
    availableTags: availableTagReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
