import styled from "styled-components"
import { Colors } from "../../models/Tags"

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