import styled from "styled-components"

type Props ={
    opend: boolean
}

export const ExpensesL = styled.div`
    .open{
        padding: 0px 10px;
        max-height: 100vw; /* Ajuste conforme necessário para o tamanho do conteúdo */
        overflow-y: scroll;
        transition: max-height 0.8s ease-in;
    }
`

export const Dropdown = styled.div<Props>`
    margin-top: 20px;
    padding: 20px;
    border-radius: 20px;
    border-bottom-right-radius: ${(props) => props.opend ? ('0px'):('20px')};
    border-bottom-left-radius: ${(props) => props.opend ? ('0px'):('20px')};
    transition: border-radius 0.3s ease-out;
    background-color: #EAB2BB;
    font-size: 20px;
    color: #3c6ca8;
    font-weight: 300;


    span{
        padding-left: 20%;
        background-color: transparent;
        font-size: 30px;
        vertical-align: middle;
    }
    `

export const ListDiv = styled.div`
    background-color: #EAB2BB;
    
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
    font-size: 20px;
    display: grid;
    padding: 12px 10px;
    margin: 6px 0;
    color: #3c6ca8;
    grid-template-columns: 70% 20%;
`