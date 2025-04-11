import { DonationStatus } from "../donateAnimals/interface"
import { User } from "../User/interface"

export interface Item {
    id?: number
    name: string
    description: string
    status: DonationStatus
    brand: string
    category: 'clothing' | 'toys' | 'accessories' | 'food' | 'hygiene' | 'other'
}

export interface Post {
    images: string[]
}

export interface DonateItemPayload {
    quantity: number
    item: Item
    userId: number
    post: Post
}

export interface ItemDonation {
    id: number
    date: string
    status?: string
    quantity: number
    item: Item
    user: User
    receivedItem?: ItemDonation
    donateItem: ItemDonation
    receiver?: User
    request?: User
    post: Post
}