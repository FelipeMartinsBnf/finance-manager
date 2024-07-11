import { TagElement } from "./styles"

type Props = {
    children: string
}

const Tag = ({children}: Props) => {


    return (
        <TagElement>{children}</TagElement>
    )
}

export default Tag