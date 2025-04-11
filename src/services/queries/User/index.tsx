import api from "../../axios"
import { LoginPayload, User } from "./interface"

export async function PostUser(payload: User) {
    const { data } = await api.post('/users', payload)
    return data
}

export async function PostUserLogin(payload: LoginPayload) {
    const response = await api.post('/auth/login', payload)
    const token = response.headers['authorization']
    const user = response.data
    return { token, user }
}