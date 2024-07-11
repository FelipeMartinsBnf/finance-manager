import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import tags, { Colors } from "../../models/Tags";

type availableTagsState = {
    TagsItens: tags[]
}

const initialState: availableTagsState = {
    TagsItens: [
        {
            id: 0,
            content: 'Pix',
            color: Colors.Green
        },
        {
            id: 1,
            content: 'Teste',
            color: Colors.Pink
        }
    ]
}

const availableTagReducer = createSlice({
    name:'availableTags',
    initialState,
    reducers: {
        createNewTag: (state, action: PayloadAction<tags>) => {
            state.TagsItens.push(action.payload)
        }
    }
})

export const { createNewTag } = availableTagReducer.actions
export default availableTagReducer.reducer