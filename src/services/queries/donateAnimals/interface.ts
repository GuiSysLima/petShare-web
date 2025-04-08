import { User } from "../User/interface"

export interface Animal {
    name: string
    race: string
    bornDate: string
    observations: string
    medicalNotes: string
    sex: string
    size: string
    category: 'dog' | 'cat' | 'rodent' | 'bird' | 'reptile' | 'other'
}

export interface Post {
    images: string[]
}

export interface DonateAnimalPayload {
    animal: Animal
    userId: number
    post: Post
}

export interface AnimalDonation {
    id: number
    date: string
    animal: Animal
    donor: User
}






