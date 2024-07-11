import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormatToFloat } from "../../utils/formatMoney";

const currentMoneyReducer= createSlice({
    name:'currentMoney',
    initialState: {
        ingoing: 0.00,
        outgoing: 0.00},
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const NumberValue = FormatToFloat(action.payload)
            state.ingoing =  Math.round((state.ingoing + NumberValue) * 100) /100
        },
        withdraw: (state, action: PayloadAction<string>) => {
            const NumberValue = FormatToFloat(action.payload)
            state.outgoing = Math.round((state.outgoing + NumberValue) * 100) /100
        }
    }
})

export const {add, withdraw} = currentMoneyReducer.actions
export default currentMoneyReducer.reducer