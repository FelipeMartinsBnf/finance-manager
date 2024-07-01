import styled from "styled-components";

type Props ={
    $negative?: boolean
 }

export const HeaderDiv = styled.div`
    margin-top: 60px;
`

export const MainTitle = styled.h1`
    color: #3c6ca8;
    font-size: 46px;
    line-height: 60%;
`
export const Username = styled.h2`
    color: #5eb090;
`

export const Values = styled.div`
    margin-top: 40px;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: bold;
`
export const Vleft = styled.div`
    border-right: 1px solid #3c6ca8;
    color: #b78fd6;
`

export const Vright = styled.div`
    text-align: right;
    color:#b78fd6;
`

export const MainValue = styled.h3<Props>`
     color: ${(props) => (props.$negative ? '#8d1b1b' : '#5eb090')};
     font-size: 46px;
`

export const MoreOptions = styled.p`
    cursor: pointer;
    margin-top: 20px;
    display: block;
    text-align: right;
    color: #3c6ca8;
`

export const HeaderLine = styled.div`
    margin-top: 32px;
    background-color: #3c6ca8;
    border-radius: 20px;
    height: 1px;

`