import api from "../../axios";
import { ItemDonation } from "../donateItems/interface";
import { ReceivedItem } from "./interface";

export async function PostReceivedItem(payload: ReceivedItem) {
    const { data } = await api.post('/receiveditems', payload);
    return data;
}

export async function PutReceivedItemConfirmReceipt(id: number) {
    const { data } = await api.put(`/receiveditems/confirm-receipt/${id}`);
    return data;
}

export async function PutReceivedItemConfirmInterest(id: number) {
    const { data } = await api.put(`/receiveditems/confirm-interest/${id}`);
    return data;
}

export async function PutReceivedItemConfirmAdoption(id: number) {
    const { data } = await api.put(`/receiveditems/confirm-adoption/${id}`);
    return data;
}

export async function PutReceivedItemCancel(id: number) {
    const { data } = await api.put(`/receiveditems/cancel/${id}`);
    return data;
}

export async function GetReceivedItems(id: number) {
    const { data } = await api.get<ItemDonation[]>(`/receiveditems/receiver/${id}`);
    return data;
}

export async function GetReceivedItemsByUserRequestId(id: number) {
    const { data } = await api.get<ItemDonation[]>(`/receiveditems/request/user/${id}`);
    return data;
}

