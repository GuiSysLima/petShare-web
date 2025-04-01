import api from "../../axios"
import { Animal } from "./interface"

export async function createAnimal(payload: Animal) {
    const { data } = await api.post('/animals', payload)
    return data
}

export async function getAnimals() {
    const { data } = await api.get<Animal>('/animals')
    return data
}


export async function getAnimal(id: string) {
    const { data } = await api.get<Animal>(`/animals/${id}`)
    return data
}
