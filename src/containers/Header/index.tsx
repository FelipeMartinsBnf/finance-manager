import { useSelector } from 'react-redux'
import {
  HeaderDiv,
  MainTitle,
  MainValue,
  Username,
  Values,
  ValueItem,
  MoreOptions,
  HeaderLine
} from './styles'
import { RootReducer } from '../../store'
import { formatMoney } from '../../utils/formatMoney'

const Header = () => {
  const { ingoing, outgoing } = useSelector(
    (state: RootReducer) => state.currentMoney
  )
  console.log((ingoing - outgoing).toFixed(2))
  console.log(formatMoney('-255.20'))
  return (
    <header>
      <HeaderDiv>
        <MainTitle>Bem Vindo!</MainTitle>
        <Username>Username</Username>
      </HeaderDiv>
      <Values>
        <ValueItem>
          <MainValue $negative={ingoing - outgoing >= 0 ? false : true}>
            R$: {formatMoney((ingoing - outgoing).toFixed(2))}
          </MainValue>
          <p>Saldo Atual</p>
        </ValueItem>
        <ValueItem>
          <MainValue $negative>
            R$: {formatMoney(outgoing.toFixed(2))}
          </MainValue>
          <p>Total das Despesas</p>
        </ValueItem>
      </Values>
      <MoreOptions>+ mais detalhes</MoreOptions>
      <HeaderLine />
    </header>
  )
}

export default Header
