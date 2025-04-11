export interface Address {
    id?: number
    number: string
    street: string
    neighborhood: string
    cep: string
    city: string
    state: string
}

export interface User {
    id?: number
    name: string
    email: string
    phone: string
    status: string
    bornDate: string
    cpf: string
    address?: Address
    image?: string | null
}

export interface LoginPayload {
    email: string
    password: string
}
