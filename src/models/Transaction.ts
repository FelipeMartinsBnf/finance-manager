export enum Types {
    ingoing,
    outgoing
}

class transaction {
    id: number
    value: number
    name: string
    dateTime: string
    type: Types
    //tags e etc

    constructor(
         id: number,
        value: number,
        name: string,
        dateTime: string,
        type: Types,
    ){
        this.id = id
        this.value = value
        this.name = name
        this.dateTime = dateTime
        this.type = type
    }
}

export default transaction
