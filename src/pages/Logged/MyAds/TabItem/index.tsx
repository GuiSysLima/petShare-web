import { CardsContainer } from './styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import RequestCard from '../../../../components/RequestCard'
import { GetDonateItemByDonorId } from '../../../../services/queries/donateItems'
import { DonationStatus } from '../../../../services/queries/donateAnimals/interface'
import { PutReceivedItemCancel, PutReceivedItemConfirmAdoption, PutReceivedItemConfirmReceipt } from '../../../../services/queries/receivedItem'
import SkeletonCardList from '../../../../components/SkeletonCard'
import ErrorCard from '../../../../components/ErrorCard'
import { useAuth } from '../../../../context/AuthContext'
import { getItemCategoryLabel } from '../../../../utils/general'
import { toast } from 'react-toastify'

const TabDonorItem = () => {
    const { user } = useAuth()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['donate-item-donor', user],
        queryFn: () => GetDonateItemByDonorId(Number(user?.id)),
        enabled: !!user?.id,
    })

    const { mutate: approveDonation } = useMutation({
        mutationFn: PutReceivedItemConfirmAdoption,
        onSuccess: () => {
            toast.success('Doação aprovada com sucesso!');
            refetch();
        },
        onError: () => {
            toast.error('Erro ao aprovar a doação.');
        },
    });

    const { mutate: confirmReceiptDonation } = useMutation({
        mutationFn: PutReceivedItemConfirmReceipt,
        onSuccess: () => {
            toast.success('Doação recebida com sucesso!');
            refetch();
        },
        onError: () => {
            toast.error('Erro ao aprovar a doação.');
        },
    });

    const { mutate: rejectDonation } = useMutation({
        mutationFn: PutReceivedItemCancel,
        onSuccess: () => {
            toast.success('Doação recusada com sucesso!');
            refetch();
        },
        onError: () => {
            toast.error('Erro ao recusar a doação.');
        },
    });

    if (isLoading) return <SkeletonCardList />
    if (isError || !data) return <ErrorCard />

    return (
        <CardsContainer>
            {data.map((donation) => (
                <RequestCard key={donation.id}
                    image={donation.post?.images}
                    status={donation.receivedItem?.status as DonationStatus}
                    title={donation.item.name}
                    infoLines={[getItemCategoryLabel(donation.item.category), donation.item.brand, `${donation.quantity} Unidades`]}
                    showButtons={!!donation.receivedItem}
                    requestName={donation.receivedItem?.receiver?.name}
                    requestPhone={donation.receivedItem?.receiver?.phone}
                    requestLocation={donation.receivedItem?.receiver?.address}
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
                    onConfirmReceipt={() => {
                        if (donation.receivedItem?.id) {
                            confirmReceiptDonation(donation.receivedItem.id);
                        }
                    }}
                />
            ))}
        </CardsContainer>

    )
}

export default TabDonorItem