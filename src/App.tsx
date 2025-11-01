// src/App.tsx
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store'
import { adicionar } from './store/reducers/carrinho'
import { alternar } from './store/reducers/favoritos'
import { useGetProdutosQuery } from './store/services/api'
import type { Produto } from './types' // <--- usar o novo types.ts

function App() {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: RootState) => state.carrinho)
  const favoritos = useSelector((state: RootState) => state.favoritos)
  const { data: produtos = [] } = useGetProdutosQuery()

  const adicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionar(produto))
  }

  const favoritar = (produto: Produto) => {
    dispatch(alternar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
