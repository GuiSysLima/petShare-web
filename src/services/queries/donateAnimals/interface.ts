import { User } from "../User/interface"

export type DonationStatus =
    'DISPONIVEL '
    | 'EM_ABERTO'
    | 'Reservado'
    | 'EM_INTERESSE'
    | 'APROVADO'
    | 'RECUSADO'
    | 'ADOTADO'
    | 'EM_ESPERA_DE_RECEBIMENTO'
    | 'EM_ESPERA_CONFIRMACAO_RECEBIMENTO'
    | 'Em espera confirmação recebimento'
    | 'ESPERANDO_CONFIRMACAO_RECEBIMENTO';

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
    post?: Post
    animal: Animal
    donor: User
    adoptionAnimal?: AdoptionAnimal;
}






