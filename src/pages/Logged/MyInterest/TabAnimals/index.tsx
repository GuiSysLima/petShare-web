import { useState } from 'react'
import { CardsContainer } from './styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import RequestItem from '../../RequestItem'
import RequestCard from '../../../../components/RequestCard'
import { calculateAnimalAge } from '../../../../utils/date'
import { GetDonateAnimalByAdopterId, PutAdoptionAnimalCancel, PutAdoptionAnimalConfirmAdoption, PutAdoptionAnimalConfirmReceipt } from '../../../../services/queries/adoptionAnimals'
import SkeletonCardList from '../../../../components/SkeletonCard'
import ErrorCard from '../../../../components/ErrorCard'
import { useAuth } from '../../../../context/AuthContext'

const TabDonorAnimals = () => {
    const { user } = useAuth()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['donate-animal-adopter', user?.id],
        queryFn: () => GetDonateAnimalByAdopterId(Number(user?.id)),
        enabled: !!user?.id,
    })

    console.log(data)

    const { mutate: approveAdoption } = useMutation({
        mutationFn: PutAdoptionAnimalConfirmReceipt,
        onSuccess: () => {
            alert('Adoção recebida com sucesso!');
            refetch();
        },
        onError: () => {
            alert('Erro ao aprovar adoção.');
        }
    });

    const { mutate: rejectAdoption } = useMutation({
        mutationFn: PutAdoptionAnimalCancel,
        onSuccess: () => {
            alert('Solicitação de adoção recusada.');
            refetch();
        },
        onError: () => {
            alert('Erro ao recusar adoção.');
        }
    });

    if (isLoading) return <SkeletonCardList />
    if (isError || !data) return <ErrorCard />

    return (
        <CardsContainer>
            {data.map((donation) => (
                donation.donateAnimal &&
                (
                    <RequestCard key={donation.id}
                        source='my-interests'
                        image={'donation.adoptionAnimal?.adopter'}
                        status={donation.status}
                        title={donation.donateAnimal.animal.name}
                        infoLines={[donation.donateAnimal.animal.category, calculateAnimalAge(donation.donateAnimal.animal.bornDate)]}
                        showButtons={!!donation.donateAnimal.adoptionAnimal}
                        requestName={donation.donateAnimal.adoptionAnimal?.adopter.name}
                        requestPhone={donation.donateAnimal.adoptionAnimal?.adopter.phone}
                        requestLocation={donation.donateAnimal.adoptionAnimal?.adopter.address}
                        onApprove={() => {
                            if (donation.donateAnimal.adoptionAnimal?.id) {
                                approveAdoption(donation.donateAnimal.adoptionAnimal.id);
                            }
                        }}
                        onReject={() => {
                            if (donation.donateAnimal.adoptionAnimal?.id) {
                                rejectAdoption(donation.donateAnimal.adoptionAnimal.id);
                            }
                        }
                        }
                    />)
            ))}
        </CardsContainer>

    )
}

export default TabDonorAnimals