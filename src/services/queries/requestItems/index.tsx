import api from "../../axios"
import { DonateItemPayload, ItemDonation } from "../donateItems/interface"

export async function PostRequestItem(data: FormData) {
    return await api.post('/requests', data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
}

export async function GetRequestItems() {
    const { data } = await api.get<ItemDonation[]>('/requests')
    return data
}

export async function GetRequestItemById(id: number) {
    const { data } = await api.get<ItemDonation>(`/requests/${id}`)
    return data
}

export async function GetRequestItemByDonorId(id: number) {
    const { data } = await api.get<ItemDonation[]>(`/requests/user/${id}`)
    return data
}
