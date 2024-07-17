import styled from 'styled-components'

type Props = {
  type: 'Error' | 'Warning'
}

export const ErrorText = styled.div<Props>`
  color: ${({ type }) => (type === 'Error' ? '#8d1b1b' : 'yellow')};
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;

  :first-child {
    font-size: 18px;
    margin: 4px 0;
  }
`
