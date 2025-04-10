import api from "../../axios"
import { AdoptionAnimal } from "./interface"

export async function PostAdoptionAnimal(payload: AdoptionAnimal) {
    const { data } = await api.post('/adoptionanimals', payload)
    return data
}

export async function PutAdoptionAnimalConfirmAdoption(id: number) {
    const { data } = await api.put(`/adoptionanimals/confirm-adoption/${id}`)
    return data
}

export async function PutAdoptionAnimalConfirmInterest(id: number) {
    const { data } = await api.put(`/adoptionanimals/confirm-interest/${id}`)
    return data
}

export async function PutAdoptionAnimalConfirmReceipt(id: number) {
    const { data } = await api.put(`/adoptionanimals/confirm-receipt/${id} `)
    return data
}

export async function PutAdoptionAnimalCancel(id: number) {
    const { data } = await api.put(`/adoptionanimals/cancel/${id} `)
    return data
}
