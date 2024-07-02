import { configureStore } from "@reduxjs/toolkit";
import currentMoneyReducer from "./reducers/currentMoney";


const store = configureStore({
    reducer: {
        currentMoney: currentMoneyReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store