import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        background-color: #fffcf6;
        font-family: "Hanken Grotesk", 'open-sans', sans-serif;
        padding: 0;
        margin: 0;
    }
`

export const MainDiv = styled.div`
    max-width: 926px;
    margin: 0 auto;
    padding: 0 26px;

`

export default GlobalStyle