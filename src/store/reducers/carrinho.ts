import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../types'

const initialState: Produto[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.find((p) => p.id === produto.id)

      if (!existe) {
        state.push(produto)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
