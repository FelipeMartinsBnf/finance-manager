import React from 'react';
import GlobalStyle, { MainDiv } from './globalstyle'
import Header from './containers/Header';
import ExpensesList from './containers/ExpensesList';
import Form from './containers/Form';


function App() {
  return (
    <MainDiv>
        <GlobalStyle />
        <Header />
        <ExpensesList />
        <ExpensesList />
        <Form />
    </MainDiv>
  );
}

export default App;
