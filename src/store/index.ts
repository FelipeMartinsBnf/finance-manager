import { configureStore } from "@reduxjs/toolkit";
import currentMoneyReducer from "./reducers/currentMoney";
import historyReducer from "./reducers/history";


const store = configureStore({
    reducer: {
        currentMoney: currentMoneyReducer,
        history: historyReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store