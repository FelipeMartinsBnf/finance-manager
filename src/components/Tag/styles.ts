import styled from 'styled-components'
import { Colors } from '../../models/Tags'

type Props = {
  color: Colors
}

export type ModalContentProps = {
  state: 'entering' | 'entered' | 'exiting' | 'exited'
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
    display: flex;
    flex-grow: 100%;
  }

  div {
    display: flex;
    flex-wrap: wrap;
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
export const ModalTagDiv = styled.div<ModalContentProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  transform: translateY(
    ${({ state }) => (state === 'entering' ? '100%' : '0')}
  );
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`

export const DivFormTags = styled.div`
  position: fixed;
  top: 30%;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 15px;

  input {
    display: inline-block;
  }

  :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 400;

    span {
      font-size: 20px;
      margin-top: 0;
    }
  }

  :last-child {
    margin-top: 15px;
    display: inline-block;
    font-size: 14px;
    margin-top: 2px;

    input {
      border: 1px solid black;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 5px;
    }

    .selected {
      border: 1px solid red;
    }

    div {
      margin-top: 8px;
    }

    button {
      padding: 10px;
      border: none;
      margin-top: 10px;
      background-color: #5eb090;
      color: #fff;
      border-radius: 10px;
      font-weight: bold;
    }
  }
`
