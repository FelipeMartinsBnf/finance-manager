import { Provider } from 'react-redux';
import store from './store'
import GlobalStyle, { MainDiv } from './globalstyle'
import Header from './containers/Header';
import ExpensesList from './containers/ExpensesList';
import Form from './containers/Form';


function App() {
  return (
    <Provider store={store}>
        <MainDiv>
            <GlobalStyle />
            <Header />
            <ExpensesList />
            <ExpensesList />
            <Form />
        </MainDiv>
    </Provider>
  );
}

export default App;
