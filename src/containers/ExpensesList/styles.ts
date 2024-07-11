import styled from "styled-components"
import { Types } from "../../models/Transaction"

type PropsDropdown ={
    opend: boolean
}

type PropsMoney = {
    type: Types.ingoing | Types.outgoing
}

export const ExpensesL = styled.div`
    .open{
        padding: 0px 4px;
        max-height: 150vw; /* Ajuste conforme necessário para o tamanho do conteúdo */
        overflow-y: scroll;
        transition: max-height 0.4s ease-in;
    }
`

export const Dropdown = styled.div<PropsDropdown>`
    margin-top: 20px;
    padding: 20px;
    border-radius: 20px;
    border-bottom-right-radius: ${(props) => props.opend ? ('0px'):('20px')};
    border-bottom-left-radius: ${(props) => props.opend ? ('0px'):('20px')};
    transition: border-radius 0.3s ease-out;
    background-color: #fffcf6;
    font-size: 20px;
    color: #3c6ca8;
    font-weight: 300;


    span{
        padding-left: 20%;
        background-color: transparent;
        color: #EAB2BB;
        font-size: 30px;
        vertical-align: middle;
    }
    `

export const ListDiv = styled.div`
    background-color: #fffcf6;
    
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    
`

export const ListItem = styled.div`
    background-color: #fffcf6;
    border-radius: 20px;
    font-size: 17px;
    display: grid;
    padding: 8px 8px;
    margin: 6px 0;
    color: #3c6ca8;
    grid-template-columns: 10% 60% 30%;
    margin: 12px 0;
`

export const MoneyDiv = styled.div<PropsMoney>`
    color: ${(props) => props.type === Types.ingoing ? '#5EB090' : '#8d1b1b' };
`

export const DataInfo = styled.p`
    margin: 0px 20px;
    padding: 8px;
    max-width: 90%;
    color: #000;
    background-color: transparent;
    border-bottom: 1px solid #3c6ca8;
`
export const DateInfo = styled.p`
    padding-top: 25%;
    font-size: 12px;
    color: #000;
`

