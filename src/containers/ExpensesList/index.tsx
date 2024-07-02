import { useState } from 'react'
import { ExpensesL, Dropdown, ListDiv, ListItem } from './styles'


const ExpensesList = () => {

    const [dropdown, setDropdown] = useState(false)

    function switchDropdown(){
        setDropdown(!dropdown)

    }

    return(
        <ExpensesL>
            <Dropdown onClick={() => switchDropdown() } opend={dropdown} className='red'>
                Extrato das Despesas<span className="material-symbols-outlined">{dropdown ? ('arrow_drop_up'): ('arrow_drop_down')}</span>
            </Dropdown>
            <ListDiv className={dropdown ? ('open'): ('')}>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
                <ListItem><div>Onlyfans</div><div>R$:199,00</div></ListItem>
            </ListDiv>
        </ExpensesL>
    )
}

export default ExpensesList