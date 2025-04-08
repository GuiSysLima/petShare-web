import api from "../../axios"
import { AnimalDonation, DonateAnimalPayload } from "./interface"

export async function PostDonateAnimal(payload: DonateAnimalPayload) {
    const { data } = await api.post('/donateanimals', payload)
    return data
}

export async function GetDonateAnimals() {
    const { data } = await api.get<AnimalDonation[]>('/donateanimals')
    return data
}

export async function GetDonateAnimalById(id: number) {
    const { data } = await api.get<AnimalDonation>(`/donateanimals/${id}`)
    return data
}

