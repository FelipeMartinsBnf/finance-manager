import styled from 'styled-components'
import { Colors } from '../../models/Tags'

type Props = {
  color: Colors
}

export const TagElement = styled.span<Props>`
  font-size: 12px;
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 1px 8px;
  border-radius: 10px;
  margin: 0 2px;
  text-align: center;
`

export const MainAddDiv = styled.div`
  .open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`
export const AddTagBtn = styled.button`
  padding: 1px 8px;
  border-radius: 10px;
  margin-top: 6px;
  text-align: center;
  background-color: #5eb090;
  border: 1px solid #5eb090;
  color: #fff;
  padding: 0 auto;
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;

  span {
    margin-left: 10px;
    font-size: 16px;
  }
`

export const TagsDiv = styled.div`
  border-radius: 20px;
  border-top-left-radius: 0;
  background-color: #fff;
  padding: 8px;

  p {
    font-size: 12px;
    color: black;
    font-weight: lighter;
  }

  span {
    cursor: pointer;
  }
`
export const NewTag = styled.button`
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #5eb090;
  color: #5eb090;
  display: block;
  padding: 2px 4px;
  margin-top: 8px;
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    margin-left: 4px;
  }
`
