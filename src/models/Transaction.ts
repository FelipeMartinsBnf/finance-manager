export enum Types {
  ingoing,
  outgoing
}

class transaction {
  id: number
  value: string
  name: string
  dateTime: string
  type: Types
  tagsId: number[]

  constructor(
    id: number,
    value: string,
    name: string,
    dateTime: string,
    type: Types,
    tagsId: number[]
  ) {
    this.id = id
    this.value = value
    this.name = name
    this.dateTime = dateTime
    this.type = type
    this.tagsId = tagsId
  }
}

export default transaction
