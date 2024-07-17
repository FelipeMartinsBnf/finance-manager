import { useState } from 'react'
import {
  ExpensesL,
  Dropdown,
  ListDiv,
  ListItem,
  MoneyDiv,
  DataInfo,
  DateInfo,
  ItemTags
} from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Transaction, { Types } from '../../models/Transaction'
import FormatDate from '../../utils/FormatDate'
import Tag from '../../components/Tag'
import { Transition, TransitionStatus } from 'react-transition-group'
import tags from '../../models/Tags'
import { GetByid } from '../../utils/getTags'

interface GroupedTransactions {
  [key: string]: Transaction[]
}

const ExpensesList = () => {
  const [dropdown, setDropdown] = useState(false)

  function switchDropdown() {
    setDropdown(!dropdown)
  }

  const HistoryItens = useSelector((state: RootReducer) => state.history.itens)
  const Tags = useSelector(
    (state: RootReducer) => state.availableTags.TagsItens
  )

  const comprasAgrupadasPorData: GroupedTransactions = HistoryItens.reduce(
    (acc: GroupedTransactions, item: Transaction) => {
      const data = FormatDate(item.dateTime).slice(0, 10) // Considerando a data no formato 'dd/mm/yyyy'
      if (!acc[data]) {
        acc[data] = []
      }
      acc[data].push(item)
      return acc
    },
    {}
  )

  // Transformar o objeto em um array de entradas
  const entradas = Object.entries(comprasAgrupadasPorData)

  return (
    <ExpensesL>
      <Dropdown onClick={() => switchDropdown()} $opend={dropdown}>
        Extrato das Despesas
        <span className="material-symbols-outlined">
          {dropdown ? 'arrow_drop_up' : 'arrow_drop_down'}
        </span>
      </Dropdown>
      <Transition in={dropdown} timeout={100} mountOnEnter unmountOnExit>
        {(state: TransitionStatus) =>
          state !== 'unmounted' && (
            <ListDiv state={state}>
              {HistoryItens.length >= 1 ? (
                entradas.map(([data, compras]) => (
                  <div key={data}>
                    <DataInfo>{data}</DataInfo>
                    {compras.map((item) => (
                      <ListItem key={item.id}>
                        <MoneyDiv
                          type={item.type}
                          className="material-symbols-outlined"
                        >
                          {item.type === Types.ingoing
                            ? 'arrow_circle_up'
                            : 'arrow_circle_down'}
                        </MoneyDiv>
                        <div>{item.name}</div>
                        <MoneyDiv type={item.type}>
                          R$: {item.type === Types.outgoing ? ' -' : ''}
                          {item.value}
                        </MoneyDiv>
                        <DateInfo>
                          {FormatDate(item.dateTime).slice(13)}
                        </DateInfo>
                        <ItemTags>
                          {GetByid(item.tagsId, Tags).map((item: tags) => (
                            <Tag key={item.id} color={item.color}>
                              {item.content}
                            </Tag>
                          ))}
                        </ItemTags>
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
          )
        }
      </Transition>
    </ExpensesL>
  )
}

export default ExpensesList
