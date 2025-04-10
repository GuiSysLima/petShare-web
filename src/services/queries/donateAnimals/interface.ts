import { User } from "../User/interface"

export type DonationStatus =
    | 'Em interesse'
    | 'Em espera de confirmação de doação'
    | 'Em espera de confirmação de recebimento'
    | 'Finalizada'
    | 'Cancelada'
    | 'Disponível para adoção';

export interface Animal {
    name: string
    race: string
    bornDate: string
    observations: string
    medicalNotes: string
    sex: string
    size: string
    status: DonationStatus
    category: 'dog' | 'cat' | 'rodent' | 'bird' | 'reptile' | 'other',
}

export interface Animal {
    name: string
    race: string
    bornDate: string
    observations: string
    medicalNotes: string
    sex: string
    size: string
    status: DonationStatus
    category: 'dog' | 'cat' | 'rodent' | 'bird' | 'reptile' | 'other',
}

export interface Post {
    images: string[]
}

export interface DonateAnimalPayload {
    animal: Animal
    userId: number
    post: Post
}

export interface AdoptionAnimal {
    id: number;
    date: string;
    status: string;
    adopter: User;
    donateAnimal: string;
}

export interface AnimalDonation {
    id: number
    date: string
    status: DonationStatus
    animal: Animal
    donor: User
    adoptionAnimal?: AdoptionAnimal;
}






