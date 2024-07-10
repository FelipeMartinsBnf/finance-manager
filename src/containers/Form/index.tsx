import { useState } from "react";
import { Btn, ModalDiv, FormHeader, Inputs, BtnsDiv, NameInput } from "./styles";
import { useDispatch } from "react-redux";
import { add, withdraw } from "../../store/reducers/currentMoney";
import { addToHistory } from "../../store/reducers/history";
import { Types } from "../../models/Transaction";
import CurrencyInput from "../../components/CurrencyInput";

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
      dateTime: new Date().toISOString()
    }));
  }

  return (
    <>
      <Btn onClick={() => renderModal()}>
        <span className="material-symbols-outlined">add</span>Nova Ação
      </Btn>
      {modal && (
        <ModalDiv>
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
            <BtnsDiv>
              <button onClick={() => addValue()}>Entrada</button>
              <button onClick={() => decreseValue()}>Saida</button>
            </BtnsDiv>
          </Inputs>
        </ModalDiv>
      )}
    </>
  );
};

export default Form;
