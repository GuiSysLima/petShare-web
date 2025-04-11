import api from "../../axios"
import { ItemDonation, DonateItemPayload } from "./interface"

export async function PostDonateItem(data: FormData) {
    return await api.post('/donateitems', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

}

export async function GetDonateItems() {
    const { data } = await api.get<ItemDonation[]>('/donateitems/available')
    return data
}

export async function GetDonateItemById(id: number) {
    const { data } = await api.get<ItemDonation>(`/donateitems/${id}`)
    return data
}

export async function GetDonateItemByDonorId(id: number) {
    const { data } = await api.get<ItemDonation[]>(`/donateitems/donor/${id}`)
    return data
}
