export enum Colors {
    Blue,
    Pink,
    Red,
    Green
}

class tags {
    id: number
    content: string
    color: Colors

    constructor(
        id: number,
        content: string,
        color: Colors
        
    ){
        this.id = id
        this.content = content
        this.color = color
    }
}

export default tags
