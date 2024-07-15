export enum Colors {
  Blue = '#3c6ca8',
  Pink = '#eab2bb',
  Red = '#a83c3c',
  Green = '#5eb090',
  Black = '#000',
  Yellow = '#eae164'
}

class tags {
  id: number
  content: string
  color: Colors

  constructor(id: number, content: string, color: Colors) {
    this.id = id
    this.content = content
    this.color = color
  }
}

export default tags
