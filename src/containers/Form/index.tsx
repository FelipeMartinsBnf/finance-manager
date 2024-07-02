import { useState } from "react"
import { Btn, ModalDiv, FormHeader, Inputs } from "./styles"
import { MainTitle } from "../Header/styles"

const Form = () => {

    const [modal, setModal] = useState(false)

    function renderModal(){
        setModal(!modal)
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
                        <label htmlFor="">R$: </label><input type="number" value={'000.00'}/>
                        <div>
                            <button>Entrada</button>
                            <button>Saida</button>
                        </div>
                    </Inputs>
                </ModalDiv>) : ('')}

        </>
    )
}

export default Form