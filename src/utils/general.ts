import { DonationStatus } from "../services/queries/donateAnimals/interface";

const animalCategoryMap: Record<string, string> = {
    dog: 'Cachorro',
    cat: 'Gato',
    bird: 'Ave',
    rodent: 'Roedor',
    reptile: 'Réptil',
    OTHER: 'Outro',
};

export const getAnimalCategoryLabel = (key: string | undefined): string => {
    if (!key) return 'Não informado';
    return animalCategoryMap[key.toLowerCase()] || 'Outro';
};

const itemCategoryMap: Record<string, string> = {
    food: 'Ração',
    toy: 'Brinquedos',
    bed: 'Camas',
    clothing: 'Roupas',
    hygiene: 'Higiene',
    carrier: 'Transporte',
    accessories: 'Acessórios',
    other: 'Outros',
};

export const getItemCategoryLabel = (key: string | undefined): string => {
    if (!key) return 'Não informado';
    return itemCategoryMap[key.toLowerCase()] || 'Outros';
};

const sexMap: Record<string, string> = {
    male: 'Macho',
    female: 'Fêmea',
};

export const getSexLabel = (key: string | undefined): string => {
    if (!key) return 'Não informado';
    return sexMap[key.toLowerCase()] || 'Outro';
};

const sizeMap: Record<string, string> = {
    small: 'Pequeno',
    medium: 'Médio',
    large: 'Grande',
};

export const getSizeLabel = (key: string | undefined): string => {
    if (!key) return 'Não informado';
    return sizeMap[key.toLowerCase()] || 'Outro';
};

const donationStatusMap: Record<string, string> = {
    'DISPONIVEL': 'Disponivel',
    'EM_ABERTO': 'Em aberto',
    'Reservado': 'Reservado',
    'EM_INTERESSE': 'Em interesse',
    'APROVADO': 'Aprovado',
    'RECUSADO': 'Recusado',
    'ADOTADO': 'Adotado',
    'EM_ESPERA_DE_RECEBIMENTO': 'Esperando recebimento',
    'EM_ESPERA_CONFIRMACAO_RECEBIMENTO': 'Esperando recebimento',
    'ESPERANDO_CONFIRMACAO_RECEBIMENTO': 'Esperando recebimento',
    'Em espera confirmação recebimento': 'Esperando recebimento',
};

export const getDonationStatusLabel = (key: string | undefined): string => {
    if (!key) return 'Não informado';
    return donationStatusMap[key] || 'Outro';
};


