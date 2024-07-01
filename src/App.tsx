import React from 'react';
import GlobalStyle, { MainDiv } from './globalstyle'
import Header from './containers/Header';
import ExpensesList from './containers/ExpensesList';


function App() {
  return (
    <MainDiv>
        <GlobalStyle />
        <Header />
        <ExpensesList />
    </MainDiv>
  );
}

export default App;
