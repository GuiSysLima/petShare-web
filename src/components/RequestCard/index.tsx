import React, { useState } from 'react';
import {
    ApproveButton,
    RejectButton,
    ButtonGroup,
    CardContainer,
    Content,
    Divider,
    Dropdown,
    DropdownItem,
    HeaderWrapper,
    Image,
    Info,
    MenuButton,
    Title,
    TopContent,
    RequestInfo,
} from './styles';
import TagStatus from '../TagStatus';
import { DonationStatus } from '../../services/queries/donateAnimals/interface';
import { Address } from '../../services/queries/User/interface';
import { getAnimalImagesUrl } from '../../utils/image';

interface CardItemProps {
    title: string;
    image: string[] | undefined;
    status: DonationStatus;
    infoLines?: string[];
    requestName?: string;
    requestPhone?: string;
    requestLocation?: Address;
    onApprove?: () => void;
    onReject?: () => void;
    onConfirmReceipt?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    showButtons?: boolean;
    source?: 'my-ads' | 'my-interests';
}

const RequestCard = ({
    title,
    image,
    status,
    infoLines = [],
    requestName,
    requestPhone,
    requestLocation,
    onApprove,
    onReject,
    onConfirmReceipt,
    onEdit,
    onDelete,
    showButtons = true,
    source = 'my-ads',
}: CardItemProps) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const isFromAds = source === 'my-ads';
    const isFromInterests = source === 'my-interests';

    const shouldShowApproveReject =
        (status === 'EM_INTERESSE' || status === 'Reservado') && isFromAds && showButtons;

    const shouldShowCancel =
        (status === 'EM_INTERESSE' || status === 'Reservado') && isFromInterests;

    const shouldShowConfirmReceipt =
        status === 'EM_ESPERA_CONFIRMACAO_RECEBIMENTO' ||
        status === 'EM_ESPERA_DE_RECEBIMENTO' ||
        status === 'Em espera confirmação recebimento' ||
        status === 'ESPERANDO_CONFIRMACAO_RECEBIMENTO';

    const shouldShowMessage =
        status == 'EM_INTERESSE' ||
        shouldShowConfirmReceipt;

    const getInfoMessage = () => {
        if (status === 'EM_INTERESSE') {
            return 'Aguardando o tutor aprovar sua solicitação...';
        }
        if (shouldShowConfirmReceipt) {
            return 'Seu animal já chegou até você?';
        }
        return '';
    };

    return (
        <CardContainer>
            <HeaderWrapper>
                <Image src={getAnimalImagesUrl(image)} alt={title} />
                <MenuButton onClick={handleMenuToggle}>⋮</MenuButton>
                {menuOpen && (
                    <Dropdown>
                        <DropdownItem onClick={onEdit}>Editar</DropdownItem>
                        <DropdownItem onClick={onDelete}>Excluir</DropdownItem>
                    </Dropdown>
                )}
            </HeaderWrapper>
            <Content>
                <TopContent>
                    <Title>{title}</Title>
                    <TagStatus status={status} />
                </TopContent>

                {infoLines.map((line, idx) => (
                    <Info key={idx}>{line}</Info>
                ))}

                {(shouldShowApproveReject || shouldShowCancel || shouldShowMessage || requestName) && <Divider />}

                {requestName && (
                    <RequestInfo>
                        <strong>{requestName}</strong><br />
                        {requestPhone && <>{requestPhone}<br /></>}
                        {requestLocation && <>{requestLocation.city} - {requestLocation.state}</>}
                    </RequestInfo>
                )}

                {shouldShowApproveReject && (
                    <ButtonGroup>
                        <ApproveButton onClick={onApprove}>Aprovar</ApproveButton>
                        <RejectButton onClick={onReject}>Recusar</RejectButton>
                    </ButtonGroup>
                )}

                {shouldShowCancel && (
                    <ButtonGroup>
                        <RejectButton onClick={onReject}>Cancelar</RejectButton>
                    </ButtonGroup>
                )}

                {shouldShowMessage && (
                    <div style={{ padding: '1rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: 'bold', color: '#555', marginBottom: '1rem' }}>
                            {getInfoMessage()}
                        </p>
                        {shouldShowConfirmReceipt && (
                            <ApproveButton onClick={onConfirmReceipt}>
                                {isFromInterests ? 'Confirmar recebimento' : 'Confirmar Entrega'}
                            </ApproveButton>
                        )}
                    </div>
                )}
            </Content>
        </CardContainer>
    );
};

export default RequestCard;
