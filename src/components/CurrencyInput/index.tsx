import React from 'react'
import { ValueInput } from './styles'
import { formatMoney } from '../../utils/formatMoney'

type Props = {
  state: string
  setInputNum: (e: string) => void
}

const CurrencyInput: React.FC<Props> = ({ state, setInputNum }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value
    const formattedValue = formatMoney(rawValue)
    setInputNum(formattedValue)
  }

  return (
    <ValueInput
      placeholder="00,00"
      type="text"
      value={state}
      onChange={handleChange}
    />
  )
}

export default CurrencyInput
