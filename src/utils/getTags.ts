import tags from '../models/Tags'

export const GetByid = (Ids: number[], Alltags: tags[]) => {
  const retorno: tags[] = []
  Ids.forEach((id) => {
    Alltags.forEach((tag) => {
      if (tag.id === id) {
        retorno.push(tag)
      }
    })
  })
  return retorno
}
