import { useState } from 'react'
import { AddTagBtn, MainAddDiv, TagsDiv } from './styles'
import Tag from '.'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import tags from '../../models/Tags'
import TagForm from './TagForm'

type Props = {
  add: (i: tags) => void
  selected: tags[]
}

const AddTag = ({ add, selected }: Props) => {
  const [addTagsDiv, SetAddTagsDiv] = useState(false)

  const TagsArray = useSelector(
    (state: RootReducer) => state.availableTags.TagsItens
  )

  function setModal() {
    SetAddTagsDiv(!addTagsDiv)
  }

  return (
    <MainAddDiv>
      <AddTagBtn
        onClick={() => setModal()}
        className={addTagsDiv ? 'open' : ''}
      >
        Adicionar Tag
        <span className="material-symbols-outlined">
          {addTagsDiv ? 'expand_circle_up' : 'expand_circle_down'}
        </span>
      </AddTagBtn>
      {addTagsDiv ? (
        <TagsDiv>
          <p>Aperte em uma tag para adicionar a esta ação</p>
          <div>
            {TagsArray.filter(
              (tag) =>
                !selected.some((selectedTag) => selectedTag.id === tag.id)
            ).map((tag) => (
              <span key={tag.id} onClick={() => add(tag)}>
                <Tag key={tag.id} color={tag.color}>
                  {tag.content}
                </Tag>
              </span>
            ))}
          </div>
          <TagForm />
        </TagsDiv>
      ) : (
        ''
      )}
    </MainAddDiv>
  )
}

export default AddTag
