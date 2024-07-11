import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import transaction  from "../../models/Transaction"

type transactionState = {
    itens: transaction[]
}

const initialState: transactionState = {
    itens: [
        // {
        //     id: 0,
        //     name: 'Testando',
        //     value: "350",
        //     type: Types.outgoing,
        //     dateTime: 'Date Mon Jul 01 2024 01:00:26 GMT-0300 (Brasilia Standard Time)'
        // },
        //         {
        //     id: 1,
        //     name: 'Testando',
        //     value: "350",
        //     type: Types.outgoing,
        //     dateTime: 'Date Mon Jul 01 2024 14:00:26 GMT-0300 (Brasilia Standard Time)'
        // },
        //         {
        //     id: 2,
        //     name: 'Testando',
        //     value: "350",
        //     type: Types.outgoing,
        //     dateTime: 'Date Mon Jul 04 2024 14:00:26 GMT-0300 (Brasilia Standard Time)'
        // },
        //         {
        //     id: 3,
        //     name: 'Testando',
        //     value: "350",
        //     type: Types.outgoing,
        //     dateTime: 'Date Mon Jul 06 2024 14:00:26 GMT-0300 (Brasilia Standard Time)'
        // },
        //         {
        //     id: 4,
        //     name: 'Testando',
        //     value: "350",
        //     type: Types.outgoing,
        //     dateTime: 'Date Mon Jul 08 2024 14:00:26 GMT-0300 (Brasilia Standard Time)'
        // }
    ]
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