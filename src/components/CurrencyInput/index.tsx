import { useState } from "react";
import { ValueInput } from "./styles";

type Props = {
    state: number,
    setInputNum: (e: number) => void
}

const CurrencyInput = ({state, setInputNum}:Props) => {
  
    // const formatMoney = (value: string): string => {
    //   const cleanValue = value.replace(/[^\d]/g, ''); // Remove todos os caracteres não numéricos
    //   const intValue = parseInt(cleanValue, 10);
  
    //   if (isNaN(intValue)) {
    //     return '';
    //   }
  
    //   // Formatar valor em dinheiro com duas casas decimais
    //   const formattedValue = (intValue / 100).toFixed(2).replace('.', ',');
  
    //   // Adicionar pontuação adequada
    //   const parts = formattedValue.split(',');
    //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    //   const finalValue = (`${parts.join('.')}`)
    //    return finalValue
    //}
    return(
        <ValueInput  placeholder="00,00" type="number" autoFocus value={state} onChange={(e) => setInputNum(parseFloat(formatMoney(e.target.value.toString())))} />
    )
}

export default CurrencyInput