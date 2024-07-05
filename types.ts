export type Characterfromapi={
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: originffromapi,
    location: originffromapi,
    image: string,
    episode: string[]
    created: string,
    error?:string
}

export type originffromapi={
    name: string,
    url: string
}

export type episodefromapi={
    id: number,
    name:string,
    air_date:string,
    episode:string,
    characters:string[]
    url:string,
    created:string
}

export type locationfromapi={
    id?: number|null,
    name: string,
    type?: string|null
    dimension?: string|null,
    residents: string[]
    url: string|null,
    created?: string|null
}