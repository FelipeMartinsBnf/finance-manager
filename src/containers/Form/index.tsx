import { useState } from "react"
import { Btn, ModalDiv, FormHeader, Inputs,BtnsDiv } from "./styles"
import { MainTitle } from "../Header/styles"
import { useDispatch } from "react-redux"
import { add, withdraw } from "../../store/reducers/currentMoney"

const Form = () => {

    const [modal, setModal] = useState(false)
    const [inputNum, setInputNum] = useState(0)

    const dispatch = useDispatch()

    function renderModal(){
        setModal(!modal)
    }

    function addValue(){
        dispatch(add(inputNum))
        setModal(false)
    }
    function decreseValue(){
        dispatch(withdraw(inputNum))
        setModal(false)
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
                        <input  placeholder="00,00" type="number" value={inputNum} onChange={(e) => setInputNum(parseFloat(e.target.value))}/>
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