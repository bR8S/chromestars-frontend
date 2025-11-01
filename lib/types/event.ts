export interface Participant {
    _id: string;
    username: string;
}

export interface Race {
    _id?: string
    name?: string
    time?: Date
    track?: string
    event?: Event
    participants?: Participant[]
}

export interface Event {
    _id: string;
    name: string;
    race: Race[];
    participants: Participant[];
}