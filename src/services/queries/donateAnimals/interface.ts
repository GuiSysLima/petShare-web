import { User } from "../User/interface"

export type DonationStatus =
    'DISPONIVEL '
    | 'Reservado'
    | 'EM_INTERESSE'
    | 'APROVADO'
    | 'RECUSADO'
    | 'ADOTADO'
    | 'EM_ESPERA_DE_RECEBIMENTO';

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
    status: DonationStatus;
    adopter: User;
    donateAnimal: AnimalDonation;
}

export interface AnimalDonation {
    id: number
    date: string
    status: DonationStatus
    animal: Animal
    donor: User
    adoptionAnimal?: AdoptionAnimal;
}






