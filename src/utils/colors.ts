import { DonationStatus } from "../services/queries/donateAnimals/interface";

export const getStatusColor = (status: DonationStatus): string => {
    switch (status) {
        case 'Em interesse':
            return '#4A90E2';
        case 'Em espera de confirmação de doação':
            return '#F5A623';
        case 'Em espera de confirmação de recebimento':
            return '#F8E71C';
        case 'Disponível para adoção':
            return '#00BCD4';
        case 'Finalizada':
            return '#7ED321';
        case 'Cancelada':
            return '#D0021B';
        default:
            return '#999999';
    }
};