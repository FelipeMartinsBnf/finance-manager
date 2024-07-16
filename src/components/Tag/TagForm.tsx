import { useDispatch } from 'react-redux'
import Tag from '.'
import { Colors } from '../../models/Tags'
import { DivFormTags, ModalTagDiv, NewTag } from './styles'
import { createNewTag } from '../../store/reducers/tags'
import { useState } from 'react'

const TagForm = () => {
  const [ModalTag, setModalTag] = useState(false)

  const [name, setName] = useState('')
  const [color, setColor] = useState<Colors>(Colors.Black)

  const closeModal = () => {
    setModalTag(!ModalTag)
  }

  const dispatch = useDispatch()

  function addTag() {
    dispatch(
      createNewTag({
        id: 100,
        color: color,
        content: name
      })
    )
    setName('')
    closeModal()
  }

  return (
    <>
      <NewTag onClick={closeModal}>
        Nova Tag
        <span className="material-symbols-outlined">add_circle</span>
      </NewTag>
      {ModalTag ? (
        <ModalTagDiv>
          <DivFormTags>
            <div>
              <h3>Criar uma Nova Tag</h3>
              <span className="material-symbols-outlined" onClick={closeModal}>
                close
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Nome da Tag"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <div>
                <p>Selecione a cor:</p>
                <span onClick={() => setColor(Colors.Black)}>
                  <Tag color={Colors.Black}>Preto</Tag>
                </span>
                <span onClick={() => setColor(Colors.Blue)}>
                  <Tag color={Colors.Blue}>Azul</Tag>
                </span>
                <span onClick={() => setColor(Colors.Green)}>
                  <Tag color={Colors.Green}>Verde</Tag>
                </span>
                <span onClick={() => setColor(Colors.Pink)}>
                  <Tag color={Colors.Pink}>Rosa</Tag>
                </span>
                <span onClick={() => setColor(Colors.Red)}>
                  <Tag color={Colors.Red}>Vermelho</Tag>
                </span>
                <span onClick={() => setColor(Colors.Yellow)}>
                  <Tag color={Colors.Yellow}>Amarelo</Tag>
                </span>
              </div>
              <button onClick={() => addTag()}>Salvar</button>
            </div>
          </DivFormTags>
        </ModalTagDiv>
      ) : (
        ''
      )}
    </>
  )
}

export default TagForm
