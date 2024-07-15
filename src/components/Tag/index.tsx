import { Colors } from '../../models/Tags'
import { TagElement } from './styles'

type Props = {
  children: string
  color: Colors
}

const Tag = ({ children, color }: Props) => {
  return <TagElement color={color}>{children}</TagElement>
}

export default Tag
