import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../types'

const initialState: Produto[] = []

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    alternar: (state, action: PayloadAction<Produto>) => {
      const index = state.findIndex((p) => p.id === action.payload.id)

      if (index >= 0) {
        state.splice(index, 1)
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { alternar } = favoritosSlice.actions
export default favoritosSlice.reducer
