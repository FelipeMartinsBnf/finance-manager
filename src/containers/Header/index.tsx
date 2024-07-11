import { useSelector } from 'react-redux'
import { HeaderDiv, MainTitle, MainValue, Username, Values, ValueItem, MoreOptions, HeaderLine } from './styles'
import { RootReducer } from '../../store'
import { formatMoney } from '../../utils/formatMoney'

const Header = () => {

    const {ingoing, outgoing} = useSelector((state: RootReducer) => state.currentMoney)

    return(
        <header>
            <HeaderDiv>
                <MainTitle>Bem Vindo!</MainTitle>
                <Username>Felipe Martins</Username>
            </HeaderDiv>
            <Values>
                <ValueItem><MainValue>R$: {formatMoney((ingoing - outgoing).toFixed(2))}</MainValue><p>Saldo Atual</p></ValueItem>
                <ValueItem><MainValue $negative>R$: {formatMoney(outgoing.toFixed(2))}</MainValue><p>Total das Despesas</p></ValueItem>
            </Values>
            <MoreOptions>+ mais detalhes</MoreOptions>
            <HeaderLine />
        </header>
    )
}

export default Header
