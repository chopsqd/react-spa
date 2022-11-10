export interface IAirport {
    id: number
    name: string
    ident: string
    local_code: string
    region: string
    type: string
    country: string
}

export interface ServerResponse<T> {
    count: number
    next: number
    previous: number
    results: T[]
}

export type IAirportType = string
export type IAirportRegion = string
export type IAirportCountry = string

export interface IFilter {
    type: IAirportType
    region: IAirportRegion
    country: IAirportCountry
}

export interface IAirportDetails {
    id: 3,
    name: string
    ident: string
    local_code: string
    region: string
    type: string
    country: string
}