import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currentMoneyReducer= createSlice({
    name:'currentMoney',
    initialState: {
        ingoing: 0.00,
        outgoing: 0.00},
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.ingoing += action.payload
        },
        withdraw: (state, action: PayloadAction<number>) => {
            state.outgoing += action.payload
        }
    }
})

export const {add, withdraw} = currentMoneyReducer.actions
export default currentMoneyReducer.reducer