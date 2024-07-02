import styled from "styled-components"

export const Btn = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px;
    padding: 10px;
    background-color: #5EB090;
    font-size: 20px;
    color: #3c6ca8;
    border-radius: 20px;
    cursor: pointer;
    span{
        background-color: transparent; 
        vertical-align: sub;
    }
`

export const ModalDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    backdrop-filter: blur(15px);
    padding: 20px 0px;
`

export const FormHeader = styled.div`
    padding: 20px 12px;
    background-color: transparent;
    margin: 20px 10px;
    color: #3c6ca8;
    font-size: 46px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 70% 20%;
    :first-child{
        background-color: transparent;
    }
    :last-child{
        text-align: right;
        background-color: transparent;
        cursor: pointer;
    }
    span{
        text-align: right;
    }
`

export const Inputs = styled.div`
    font-weight: bold;
    padding: 0px 12px;
    background-color: transparent;
    font-size: 36px;
    color: #5EB090;
    text-align: center;
    label{
        background-color: transparent;
    }
    input{
        font-weight: bold;
        background-color: transparent;
        border: none;
        font-size: 50px;
        color: #5EB090;
        text-align: right;
        max-width: 60%;
    }
`