import api from "../../axios";
import { ReceivedItem } from "./interface";

export async function PostReceivedItem(payload: ReceivedItem) {
    const { data } = await api.post('/receivedItems', payload);
    return data;
}

export async function PutReceivedItemConfirmReceipt(id: number) {
    const { data } = await api.put(`/receivedItems/confirm-receipt/${id}`);
    return data;
}

export async function PutReceivedItemConfirmInterest(id: number) {
    const { data } = await api.put(`/receivedItems/confirm-interest/${id}`);
    return data;
}

export async function PutReceivedItemConfirmAdoption(id: number) {
    const { data } = await api.put(`/receivedItems/confirm-adoption/${id}`);
    return data;
}

export async function PutReceivedItemCancel(id: number) {
    const { data } = await api.put(`/receivedItems/cancel/${id}`);
    return data;
}
