import styled from 'styled-components'

type Props = {
  $negative?: boolean
}

export const HeaderDiv = styled.div`
  padding-top: 60px;
  padding-left: 22px;
  padding-right: 22px;
`

export const MainTitle = styled.h1`
  color: #1b548d;
  font-size: 46px;
  line-height: 60%;
`
export const Username = styled.h2`
  color: #3c6ca8;
`

export const Values = styled.div`
  margin-top: 30px;
  padding: 0 22px;
  font-weight: bold;
`
export const ValueItem = styled.div`
  display: block;
  margin-top: 12px;
  color: #3c6ca8;
  font-weight: lighter;
`

export const MainValue = styled.h3<Props>`
  color: ${(props) => (props.$negative ? '#8d1b1b' : '#5eb090')};
  font-size: 40px;
`

export const MoreOptions = styled.p`
  cursor: pointer;
  margin-top: 20px;
  display: block;
  text-align: right;
  color: #1b548d;
  font-weight: bold;
`

export const HeaderLine = styled.div`
  margin-top: 12px;
  background-color: #3c6ca8;
  border-radius: 20px;
  height: 1px;
`
