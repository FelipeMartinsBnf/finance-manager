import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Hanken Grotesk", 'open-sans', sans-serif;
        padding: 0;
        margin: 0;
    }
`

export const MainDiv = styled.div`
    background: rgb(238,244,240);
    background: linear-gradient(180deg, rgba(238,244,240,1) 10%, rgba(222,193,248,1) 100%);
    min-height: 100vh;
    max-width: 926px;
    margin: 0 auto;
    padding: 0 12px;
    padding-bottom: 46px;
`

export default GlobalStyle