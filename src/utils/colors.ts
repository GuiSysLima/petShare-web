import { DonationStatus } from "../services/queries/donateAnimals/interface";

export const getStatusColor = (status: DonationStatus): string => {
    if (!status) return '#999999';

    switch (status) {
        case 'DISPONIVEL':
            return '#2DB67C';
        case 'EM_ABERTO':
            return '#3498DB';
        case 'Reservado':
            return '#9B59B6';
        case 'EM_INTERESSE':
            return '#F39C12';
        case 'APROVADO':
            return '#27AE60';
        case 'RECUSADO':
        case 'RECUSADA':
            return '#E74C3C';
        case 'FINALIZADO':
        case 'FINALIZADA':
            return '#2980B9';
        case 'ADOTADO':
            return '#8BC34A';
        case 'EM_ESPERA_DE_RECEBIMENTO':
        case 'EM_ESPERA_CONFIRMACAO_RECEBIMENTO':
        case 'ESPERANDO_CONFIRMACAO_RECEBIMENTO':
        case 'Em espera confirmação recebimento':
            return '#E67E22';
        default:
            return '#999999';
    }
};
