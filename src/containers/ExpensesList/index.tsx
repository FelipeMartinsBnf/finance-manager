import { useState } from 'react'
import { ExpensesL, Dropdown, ListDiv, ListItem, MoneyDiv } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Types } from '../../models/Transaction'


const ExpensesList = () => {

    const [dropdown, setDropdown] = useState(false)

    function switchDropdown(){
        setDropdown(!dropdown)

    }

    const HistoryItens = useSelector((state: RootReducer) => state.history.itens)

    return(
        <ExpensesL>
            <Dropdown onClick={() => switchDropdown() } opend={dropdown} className='red'>
                Extrato das Despesas<span className="material-symbols-outlined">{dropdown ? ('arrow_drop_up'): ('arrow_drop_down')}</span>
            </Dropdown>
            <ListDiv className={dropdown ? ('open'): ('')}>
                {
                    HistoryItens.length >= 1 ?
                            HistoryItens.map((item) => (
                                <>
                                    {/* *Degug = {item.dateTime} */}
                                    <ListItem>
                                        <div>{item.name}</div>
                                        <MoneyDiv type={item.type}>R$: {item.type === Types.outgoing ? ' -' : ''}{item.value}</MoneyDiv>
                                    </ListItem>
                                </>
                            ))
                    : (<ListItem> {'>'} Adicione uma Transação para ver o Histórico!</ListItem>)
                }
            </ListDiv>
        </ExpensesL>
    )
}

export default ExpensesList