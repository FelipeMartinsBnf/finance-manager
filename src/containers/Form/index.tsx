import { useState } from "react"
import { Btn, ModalDiv, FormHeader, Inputs,BtnsDiv, ValueInput, NameInput } from "./styles"
import { useDispatch } from "react-redux"
import { add, withdraw } from "../../store/reducers/currentMoney"
import { addToHistory } from "../../store/reducers/history"
import { Types } from "../../models/Transaction"

const Form = () => {

    const [modal, setModal] = useState(false)
    const [inputNum, setInputNum] = useState(0)
    const [name, setname] = useState('')

    const dispatch = useDispatch()

    function renderModal(){
        setModal(!modal)
    }

    function addValue(){
        dispatch(add(inputNum))
        createTransactionObject(Types.ingoing)
        setInputNum(0)
        setname('')
        setModal(false)
    }
    function decreseValue(){
        dispatch(withdraw(inputNum))
        createTransactionObject(Types.outgoing)
        setInputNum(0)
        setname('')
        setModal(false)
    }

    function createTransactionObject(type: Types.ingoing | Types.outgoing){
        dispatch(addToHistory({
            value: inputNum,
            type: type,
            name: name,
            dateTime: Date()
        }))
    }

    return(
        <>
            <Btn onClick={() => renderModal()}>
                <span className="material-symbols-outlined">add</span>Nova Ação
            </Btn>
            {modal ? (
                <ModalDiv>
                    <FormHeader>
                        <div>Adicionar Valor</div><div onClick={() => renderModal()}><span className="material-symbols-outlined">arrow_back_ios</span></div>
                    </FormHeader>
                    <Inputs>
                        <label htmlFor="">R$: </label>
                        <ValueInput  placeholder="00,00" type="number" autoFocus value={inputNum} onChange={(e) => setInputNum(parseFloat(e.target.value))}/>
                        <NameInput type="text" placeholder="Descrição.." value={name} onChange={(e) => setname(e.target.value)} />
                        <BtnsDiv>
                            <button onClick={() => addValue()}>Entrada</button>
                            <button onClick={() => decreseValue()}>Saida</button>
                        </BtnsDiv>
                    </Inputs>
                </ModalDiv>) : ('')}

        </>
    )
}

export default Form