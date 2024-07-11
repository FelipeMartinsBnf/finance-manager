import { useState } from 'react'
import { ExpensesL, Dropdown, ListDiv, ListItem, MoneyDiv, DataInfo, DateInfo } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Transaction, { Types } from '../../models/Transaction'
import FormatDate from '../../utils/FormatDate'
import Tag from '../../components/Tag'


interface GroupedTransactions {
  [key: string]: Transaction[];
}

const ExpensesList = () => {

    const [dropdown, setDropdown] = useState(false)

    function switchDropdown(){
        setDropdown(!dropdown)

    }

    let HistoryItens = useSelector((state: RootReducer) => state.history.itens)

    const comprasAgrupadasPorData: GroupedTransactions = HistoryItens.reduce((acc: GroupedTransactions, item: Transaction) => {
        const data = FormatDate(item.dateTime).slice(0, 9); // Considerando a data no formato 'dd/mm/yyyy'
        if (!acc[data]) {
            acc[data] = []
        }
        acc[data].push(item);
        return acc;
    }, {});


     // Transformar o objeto em um array de entradas
    const entradas = Object.entries(comprasAgrupadasPorData);

    return (
        <ExpensesL>
            <Dropdown onClick={() => switchDropdown()} opend={dropdown} className='red'>
                Extrato das Despesas
                <span className="material-symbols-outlined">
                    {dropdown ? 'arrow_drop_up' : 'arrow_drop_down'}
                </span>
            </Dropdown>
            <ListDiv className={dropdown ? 'open' : ''}>
                {HistoryItens.length >= 1 ? (
                    entradas.map(([data, compras]) => (
                        <div key={data}>
                            <DataInfo>{data}</DataInfo>
                            {compras.map((item) => (
                                <ListItem key={item.id}>
                                    <MoneyDiv type={item.type} className="material-symbols-outlined">
                                        {item.type === Types.ingoing ? 'arrow_circle_up' : 'arrow_circle_down'}
                                    </MoneyDiv>
                                    <div>{item.name}</div>
                                    <MoneyDiv type={item.type}>
                                        R$: {item.type === Types.outgoing ? ' -' : ''}{item.value}
                                    </MoneyDiv>
                                    <DateInfo>{FormatDate(item.dateTime).slice(13)}</DateInfo>
                                    <div>
                                        <Tag>Tag 1</Tag>
                                        <Tag>Tag 2</Tag>
                                        <Tag>Tag 3</Tag>
                                    </div>
                                </ListItem>
                            ))}
                        </div>
                    ))
                ) : (
                    <ListItem>
                        <div></div> 
                        {'>'} Adicione uma Transação para ver o Histórico!
                    </ListItem>

                )}
            </ListDiv>
        </ExpensesL>
    );
};

export default ExpensesList;