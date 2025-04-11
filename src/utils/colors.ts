import { DonationStatus } from "../services/queries/donateAnimals/interface";

export const getStatusColor = (status: DonationStatus): string => {
    switch (status) {
        case 'EM_INTERESSE':
            return '#F5A623';
        case 'EM_ESPERA_DE_RECEBIMENTO':
            return '#F8E71C';
        case 'DISPONIVEL ':
            return '#00BCD4';
        case 'ADOTADO':
            return '#7ED321';
        case 'APROVADO':
            return '#D0021B';
        default:
            return '#999999';
    }
};