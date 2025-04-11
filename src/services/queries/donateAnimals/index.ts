import api from "../../axios"
import { AnimalDonation, DonateAnimalPayload } from "./interface"

export async function PostDonateAnimal(data: FormData) {
    return await api.post('/donateanimals', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export async function GetDonateAnimals() {
    const { data } = await api.get<AnimalDonation[]>('/donateanimals/available')
    return data
}

export async function GetDonateAnimalById(id: number) {
    const { data } = await api.get<AnimalDonation>(`/donateanimals/${id}`)
    return data
}

export async function GetDonateAnimalByDonorId(id: number) {
    const { data } = await api.get<AnimalDonation[]>(`/donateanimals/donor/${id}`)
    return data
}


