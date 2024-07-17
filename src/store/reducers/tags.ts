import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import tags, { Colors } from '../../models/Tags'

type availableTagsState = {
  TagsItens: tags[]
}

const initialState: availableTagsState = {
  TagsItens: [
    {
      id: 0,
      content: 'Pix',
      color: Colors.Blue
    },
    {
      id: 1,
      content: 'Teste',
      color: Colors.Pink
    }
  ]
}

const availableTagReducer = createSlice({
  name: 'availableTags',
  initialState,
  reducers: {
    createNewTag: (state, action: PayloadAction<Omit<tags, 'id'>>) => {
      const lastItem = state.TagsItens[state.TagsItens.length - 1]
      const newItem = {
        ...action.payload,
        id: lastItem ? lastItem.id + 1 : 1
      }
      state.TagsItens.push(newItem)
    }
  }
})

export const { createNewTag } = availableTagReducer.actions
export default availableTagReducer.reducer
