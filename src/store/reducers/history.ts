import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import transaction from "../../models/Transaction"

type transactionState = {
    itens: transaction[]
}

const initialState: transactionState = {
    itens: []
}
const historyReducer = createSlice({
    name:'history',
    initialState,
    reducers: {
        addToHistory: (state, action: PayloadAction<Omit <transaction, 'id'>>) => {
            const lastItem = state.itens[state.itens.length - 1]
            const newItem = {
                ...action.payload,
                id: lastItem ? lastItem.id + 1 : 1
            }
            state.itens.push(newItem)
        }
    }
})

export const { addToHistory } = historyReducer.actions
export default historyReducer.reducer