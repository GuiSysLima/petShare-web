import { CardsContainer } from './styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import RequestCard from '../../../../components/RequestCard'
import { GetDonateItemByDonorId } from '../../../../services/queries/donateItems'
import { DonationStatus } from '../../../../services/queries/donateAnimals/interface'
import { GetReceivedItems, PutReceivedItemCancel, PutReceivedItemConfirmAdoption, PutReceivedItemConfirmReceipt } from '../../../../services/queries/receivedItem'
import SkeletonCardList from '../../../../components/SkeletonCard'
import ErrorCard from '../../../../components/ErrorCard'
import { useAuth } from '../../../../context/AuthContext'
import { getItemCategoryLabel } from '../../../../utils/general'

const TabDonorItem = () => {
    const { user } = useAuth()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['received-item-donor', user],
        queryFn: () => GetReceivedItems(Number(user?.id)),
        enabled: !!user?.id,
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

    const { mutate: confirmReceiptDonation } = useMutation({
        mutationFn: PutReceivedItemConfirmReceipt,
        onSuccess: () => {
            alert('Doação recebida com sucesso!');
            refetch();
        },
        onError: () => {
            alert('Erro ao aprovar a doação.');
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

    if (isLoading) return <SkeletonCardList />
    if (isError || !data) return <ErrorCard />

    return (
        <CardsContainer>
            {data.map((donation) => (
                donation.donateItem &&
                <RequestCard key={donation.id}
                    source='my-interests'
                    image={donation.donateItem.post?.images}
                    status={donation.status as DonationStatus}
                    title={donation.donateItem.item.name}
                    infoLines={[getItemCategoryLabel(donation.donateItem.item.category), donation.donateItem.item.brand, `${donation.quantity} Unidades`]}
                    showButtons={!!donation.receivedItem}
                    requestName={donation.receiver?.name}
                    requestPhone={donation.receiver?.phone}
                    requestLocation={donation.receiver?.address}
                    onApprove={() => {
                        if (donation.receiver?.id) {
                            approveDonation(donation.receiver?.id);
                        }
                    }}
                    onReject={() => {
                        if (donation.receiver?.id) {
                            rejectDonation(donation.receiver?.id);
                        }
                    }}
                    onConfirmReceipt={() => {
                        if (donation.id) {
                            confirmReceiptDonation(donation.id);
                        }
                    }}
                />
            ))}
        </CardsContainer>

    )
}

export default TabDonorItem