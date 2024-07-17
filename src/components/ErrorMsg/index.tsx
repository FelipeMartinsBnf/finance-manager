import { ErrorText } from './styles'

type Props = {
  type: 'Error' | 'Warning'
  children: string
}

const ErrorMsg = ({ type, children }: Props) => {
  return (
    <ErrorText type={type}>
      <span className="material-symbols-outlined">error</span>
      {children}
    </ErrorText>
  )
}

export default ErrorMsg
