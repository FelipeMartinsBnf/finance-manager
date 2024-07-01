import { HeaderDiv, MainTitle, MainValue, Username, Values, Vright, Vleft, MoreOptions, HeaderLine } from './styles'

const Header = () => {


    return(
        <header>
            <HeaderDiv>
                <MainTitle>Bem Vindo!</MainTitle>
                <Username>Felipe Martins</Username>
            </HeaderDiv>
            <Values>
                <Vleft><MainValue>288,99</MainValue><p>Saldo Atual</p></Vleft>
                <Vright><MainValue $negative>-288,99</MainValue><p>Total das Despesas</p></Vright>
            </Values>
            <MoreOptions>+ mais detalhes</MoreOptions>
            <HeaderLine />
        </header>
    )
}

export default Header
