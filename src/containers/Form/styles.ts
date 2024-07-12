import styled from "styled-components"


export type ModalContentProps ={
    state: 'entering' | 'entered' | 'exiting' | 'exited';
}


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

export const ModalDiv = styled.div<ModalContentProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    backdrop-filter: blur(15px);
    padding: 20px 0px;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translateY(${({ state }) => (state === 'entering' ? '100%' : '0')});
    opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`

export const FormHeader = styled.div`
    padding: 20px 12px;
    background-color: transparent;
    margin: 20px 10px;
    color: #3c6ca8;
    font-size: 46px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 70% 30%;
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
    color: #3c6ca8;
    text-align: center;
    label{
        background-color: transparent;
    }
    input{
        background-color: transparent;
    }
`


export const NameInput = styled.input`
    font-size: 26px;
    margin-top: 10px;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0, 0.2);
    padding: 6px;
    color: #3c6ca8;
`

export const BtnsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
    background-color: transparent;

    :first-child{
        background-color: #5EB090;
        font-size: 24px;
        color: #fff;
        border-radius: 20px;
        border: none;
        padding: 8px;
    }
    :last-child{
        background-color: #8d1b1b;
        color:#fff;
        font-size: 20px;
        border-radius: 20px;
        border: none;
    }
`

