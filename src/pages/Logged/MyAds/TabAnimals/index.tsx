import { useState } from 'react'
import { CardsContainer } from './styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import { GetDonateAnimalByDonorId } from '../../../../services/queries/donateAnimals'
import RequestItem from '../../RequestItem'
import RequestCard from '../../../../components/RequestCard'
import { calculateAnimalAge } from '../../../../utils/date'
import { PutAdoptionAnimalCancel, PutAdoptionAnimalConfirmAdoption, PutAdoptionAnimalConfirmReceipt } from '../../../../services/queries/adoptionAnimals'
import SkeletonCardList from '../../../../components/SkeletonCard'
import ErrorCard from '../../../../components/ErrorCard'
import { useAuth } from '../../../../context/AuthContext'
import { getAnimalCategoryLabel } from '../../../../utils/general'
import { toast } from 'react-toastify'

const TabDonorAnimals = () => {
    const { user } = useAuth()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['donate-animal-donor', user?.id],
        queryFn: () => GetDonateAnimalByDonorId(Number(user?.id)),
        enabled: !!user?.id,
    })

    const { mutate: approveAdoption } = useMutation({
        mutationFn: PutAdoptionAnimalConfirmAdoption,
        onSuccess: () => {
            toast.success('Adoção aprovada com sucesso!');
            refetch();
        },
        onError: () => {
            toast.error('Erro ao aprovar adoção.');
        }
    });

    const { mutate: ConfirmReceiptAdoption } = useMutation({
        mutationFn: PutAdoptionAnimalConfirmReceipt,
        onSuccess: () => {
            toast.success('Adoção recebida com sucesso!');
            refetch();
        },
        onError: () => {
            toast.error('Erro ao aprovar adoção.');
        }
    });

    const { mutate: rejectAdoption } = useMutation({
        mutationFn: PutAdoptionAnimalCancel,
        onSuccess: () => {
            toast.success('Solicitação de adoção recusada.');
            refetch();
        },
        onError: () => {
            toast.error('Erro ao recusar adoção.');
        }
    });

    if (isLoading) return <SkeletonCardList />
    if (isError || !data) return <ErrorCard />

    return (
        <CardsContainer>
            {data.map((donation) => (
                <RequestCard key={donation.id}
                    image={donation.post?.images}
                    status={donation.status}
                    title={donation.animal.name}
                    infoLines={[getAnimalCategoryLabel(donation.animal.category), calculateAnimalAge(donation.animal.bornDate)]}
                    showButtons={!!donation.adoptionAnimal}
                    requestName={donation.adoptionAnimal?.adopter.name}
                    requestPhone={donation.adoptionAnimal?.adopter.phone}
                    requestLocation={donation.adoptionAnimal?.adopter.address}
                    onApprove={() => {
                        if (donation.adoptionAnimal?.id) {
                            approveAdoption(donation.adoptionAnimal.id);
                        }
                    }}
                    onReject={() => {
                        if (donation.adoptionAnimal?.id) {
                            rejectAdoption(donation.adoptionAnimal.id);
                        }
                    }
                    }
                    onConfirmReceipt={() => {
                        if (donation.adoptionAnimal?.id) {
                            ConfirmReceiptAdoption(donation.adoptionAnimal.id);
                        }
                    }}
                />
            ))}
        </CardsContainer>

    )
}

export default TabDonorAnimals