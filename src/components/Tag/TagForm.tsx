import { useDispatch } from 'react-redux'
import { NewTag } from './styles'
import { createNewTag } from '../../store/reducers/tags'
import { Colors } from '../../models/Tags'

const TagForm = () => {
  const dispatch = useDispatch()

  function addTag(i: string) {
    dispatch(
      createNewTag({
        id: 100,
        color: Colors.Red,
        content: i
      })
    )
  }

  return (
    <NewTag onClick={() => addTag('teste')}>
      Nova Tag
      <span className="material-symbols-outlined">add_circle</span>
      <input type="text" placeholder="Content" />
    </NewTag>
  )
}

export default TagForm
