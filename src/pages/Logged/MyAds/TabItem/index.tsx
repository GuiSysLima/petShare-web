import { CardsContainer } from './styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import RequestCard from '../../../../components/RequestCard'
import { GetDonateItemByDonorId } from '../../../../services/queries/donateItems'
import { DonationStatus } from '../../../../services/queries/donateAnimals/interface'
import { PutReceivedItemCancel, PutReceivedItemConfirmAdoption } from '../../../../services/queries/receivedItem'

const TabDonorItem = () => {
    const userId = 1

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['donate-item-donor', userId],
        queryFn: () => GetDonateItemByDonorId(Number(userId)),
        enabled: !!userId,
    })

    const { mutate: approveDonation } = useMutation({
        mutationFn: PutReceivedItemConfirmAdoption,
        onSuccess: () => {
            alert('Doação recusada com sucesso!');
            refetch();
        },
        onError: () => {
            alert('Erro ao recusar a doação.');
        },
    });

    const { mutate: rejectDonation } = useMutation({
        mutationFn: PutReceivedItemCancel,
        onSuccess: () => {
            alert('Doação recusada com sucesso!');
            refetch();
        },
        onError: () => {
            alert('Erro ao recusar a doação.');
        },
    });

    if (isLoading) return <p>Carregando animais...</p>
    if (isError || !data) return <p>Erro ao carregar os animais.</p>

    return (
        <CardsContainer>
            {data.map((donation) => (
                <RequestCard key={donation.id}
                    image={'aaaa'}
                    status={donation.status as DonationStatus}
                    title={donation.item.name}
                    infoLines={[donation.item.category, donation.item.brand, `${donation.quantity} Unidades`]}
                    showButtons={!!donation.receivedItem}
                    requestName={donation.receivedItem?.name}
                    requestPhone={donation.receivedItem?.phone}
                    requestLocation={donation.receivedItem?.address}
                    onApprove={() => {
                        if (donation.receivedItem?.id) {
                            approveDonation(donation.receivedItem.id);
                        }
                    }}
                    onReject={() => {
                        if (donation.receivedItem?.id) {
                            rejectDonation(donation.receivedItem.id);
                        }
                    }}
                />
            ))}
        </CardsContainer>

    )
}

export default TabDonorItem