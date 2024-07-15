import { useState } from 'react'
import {
  Btn,
  ModalDiv,
  FormHeader,
  Inputs,
  BtnsDiv,
  NameInput,
  TagsDiv,
  TagsGrid
} from './styles'
import { useDispatch } from 'react-redux'
import { add, withdraw } from '../../store/reducers/currentMoney'
import { addToHistory } from '../../store/reducers/history'
import { Types } from '../../models/Transaction'
import CurrencyInput from '../../components/CurrencyInput'
import { Transition, TransitionStatus } from 'react-transition-group'
import Tag from '../../components/Tag'
import tags from '../../models/Tags'
import AddTag from '../../components/Tag/AddTag'

const Form = () => {
  const [modal, setModal] = useState(false)
  const [inputNum, setInputNum] = useState('')
  const [name, setName] = useState('')
  const [selectedTags, setSelectedTags] = useState<tags[]>([])

  const dispatch = useDispatch()

  function renderModal() {
    setModal(!modal)
  }

  function addValue() {
    dispatch(add(inputNum))
    createTransactionObject(Types.ingoing)
    setInputNum('')
    setName('')
    setModal(false)
    setSelectedTags([])
  }

  function decreseValue() {
    dispatch(withdraw(inputNum))
    createTransactionObject(Types.outgoing)
    setInputNum('')
    setName('')
    setModal(false)
    setSelectedTags([])
  }

  function createTransactionObject(type: Types.ingoing | Types.outgoing) {
    dispatch(
      addToHistory({
        value: inputNum,
        type: type,
        name: name,
        dateTime: new Date().toISOString(),
        tagsId: selectedTags.map((i) => i.id)
      })
    )
  }

  function addToTags(i: tags) {
    setSelectedTags([...selectedTags, i])
  }
  function removeTags(i: number) {
    const filterById = (array: tags[], id: number): tags[] => {
      return array.filter((tag) => tag.id !== id)
    }
    setSelectedTags(filterById(selectedTags, i))
  }

  return (
    <>
      <Btn onClick={() => renderModal()}>
        <span className="material-symbols-outlined">add</span>Nova Ação
      </Btn>
      <Transition in={modal} timeout={100} mountOnEnter unmountOnExit>
        {(state: TransitionStatus) =>
          state !== 'unmounted' && (
            <ModalDiv state={state}>
              <FormHeader>
                <div>Adicionar Valor</div>
                <div onClick={() => renderModal()}>
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>
                </div>
              </FormHeader>
              <Inputs>
                <label htmlFor="">R$: </label>
                <CurrencyInput state={inputNum} setInputNum={setInputNum} />
                <NameInput
                  type="text"
                  placeholder="Descrição.."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TagsDiv>
                  <h3>Tags Selecionadas:</h3>
                  <TagsGrid>
                    {selectedTags.map((item) => (
                      <span key={item.id} onClick={() => removeTags(item.id)}>
                        <Tag key={item.id} color={item.color}>
                          {item.content}
                        </Tag>
                      </span>
                    ))}
                  </TagsGrid>
                  <AddTag add={addToTags} selected={selectedTags} />
                </TagsDiv>
                <BtnsDiv>
                  <button onClick={() => addValue()}>Entrada</button>
                  <button onClick={() => decreseValue()}>Saida</button>
                </BtnsDiv>
              </Inputs>
            </ModalDiv>
          )
        }
      </Transition>
    </>
  )
}

export default Form
