import { useSelector } from 'react-redux'
import { HeaderDiv, MainTitle, MainValue, Username, Values, Vright, Vleft, MoreOptions, HeaderLine } from './styles'
import { RootReducer } from '../../store'

const Header = () => {

    const {ingoing, outgoing} = useSelector((state: RootReducer) => state.currentMoney)

    return(
        <header>
            <HeaderDiv>
                <MainTitle>Bem Vindo!</MainTitle>
                <Username>Felipe Martins</Username>
            </HeaderDiv>
            <MainValue>R$: {ingoing-outgoing}</MainValue>
            <Values>
                <Vleft><MainValue>{ingoing}</MainValue><p>Saldo Atual</p></Vleft>
                <Vright><MainValue $negative>{outgoing}</MainValue><p>Total das Despesas</p></Vright>
            </Values>
            <MoreOptions>+ mais detalhes</MoreOptions>
            <HeaderLine />
        </header>
    )
}

export default Header
