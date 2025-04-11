import { CardsContainer } from './styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import RequestCard from '../../../../components/RequestCard'
import { DonationStatus } from '../../../../services/queries/donateAnimals/interface'
import { GetRequestItemByDonorId } from '../../../../services/queries/requestItems'
import { GetReceivedItems, GetReceivedItemsByUserRequestId, PutReceivedItemCancel, PutReceivedItemConfirmAdoption } from '../../../../services/queries/receivedItem'
import SkeletonCardList from '../../../../components/SkeletonCard'
import ErrorCard from '../../../../components/ErrorCard'
import { useAuth } from '../../../../context/AuthContext'
import { getItemCategoryLabel } from '../../../../utils/general'

const TabDonorItemHelp = () => {
    const { user } = useAuth()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['received-item-request', user?.id],
        queryFn: () => GetReceivedItemsByUserRequestId(Number(user?.id)),
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
                    image={donation.post?.images}
                    status={donation.status as DonationStatus}
                    title={donation.donateItem.item.name}
                    infoLines={[getItemCategoryLabel(donation.donateItem.item.category), donation.donateItem.item.brand, `${donation.quantity} Unidades`]}
                    showButtons={!!donation.donateItem.receivedItem}
                    requestName={donation.donateItem.receivedItem?.request?.name}
                    requestPhone={donation.donateItem.receivedItem?.request?.phone}
                    requestLocation={donation.donateItem.receivedItem?.request?.address}
                    onApprove={() => {
                        if (donation.donateItem.receivedItem?.id) {
                            approveDonation(donation.donateItem.receivedItem.id);
                        }
                    }}
                    onReject={() => {
                        if (donation.donateItem.receivedItem?.id) {
                            rejectDonation(donation.donateItem.receivedItem.id);
                        }
                    }}
                />
            ))}
        </CardsContainer>
    )
}

export default TabDonorItemHelp