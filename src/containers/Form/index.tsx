import { useState } from "react";
import { Btn, ModalDiv, FormHeader, Inputs, BtnsDiv, NameInput, TagsDiv, TagsGrid } from "./styles";
import { useDispatch } from "react-redux";
import { add, withdraw } from "../../store/reducers/currentMoney";
import { addToHistory } from "../../store/reducers/history";
import { Types } from "../../models/Transaction";
import CurrencyInput from "../../components/CurrencyInput";
import { Transition, TransitionStatus } from 'react-transition-group'
import Tag from "../../components/Tag";
import { Colors } from "../../models/Tags";

const Form = () => {
  const [modal, setModal] = useState(false);
  const [inputNum, setInputNum] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  function renderModal() {
    setModal(!modal);
  }

  function addValue() {
    dispatch(add(inputNum));
    createTransactionObject(Types.ingoing);
    setInputNum('');
    setName('');
    setModal(false);
  }

  function decreseValue() {
    dispatch(withdraw(inputNum));
    createTransactionObject(Types.outgoing);
    setInputNum('');
    setName('');
    setModal(false);
  }

  function createTransactionObject(type: Types.ingoing | Types.outgoing) {
    dispatch(addToHistory({
      value: inputNum,
      type: type,
      name: name,
      dateTime: new Date().toISOString(),
      tagsId: [0, 1]
    }));
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
                        <span className="material-symbols-outlined">arrow_back_ios</span>
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
                                <Tag color={Colors.Black}>Gasolina</Tag>
                                <Tag color={Colors.Green}>Pix</Tag>
                                <Tag color={Colors.Yellow}>Cartão</Tag>
                                <Tag color={Colors.Blue}>Comida</Tag>
                                <Tag color={Colors.Red}>Ifood</Tag>
                                <Tag color={Colors.Pink}>Festa</Tag>
                            </TagsGrid>
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
  );
};

export default Form;
