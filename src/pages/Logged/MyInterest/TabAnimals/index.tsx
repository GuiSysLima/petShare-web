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
import { getAnimalCategoryLabel } from '../../../../utils/general'
import { getAnimalImage, getAnimalImagesUrl } from '../../../../utils/image'
import { toast } from 'react-toastify'

const TabDonorAnimals = () => {
    const { user } = useAuth()

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['donate-animal-adopter', user?.id],
        queryFn: () => GetDonateAnimalByAdopterId(Number(user?.id)),
        enabled: !!user?.id,
    })

    const { mutate: approveAdoption } = useMutation({
        mutationFn: PutAdoptionAnimalConfirmReceipt,
        onSuccess: () => {
            toast.success('Adoção aprovada com sucesso!');
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
                donation.donateAnimal &&
                (
                    <RequestCard key={donation.id}
                        source='my-interests'
                        image={donation.donateAnimal.post?.images}
                        status={donation.status}
                        title={donation.donateAnimal.animal.name}
                        infoLines={[getAnimalCategoryLabel(donation.donateAnimal.animal.category), calculateAnimalAge(donation.donateAnimal.animal.bornDate)]}
                        showButtons={!!donation.donateAnimal.adoptionAnimal}
                        requestName={donation.donateAnimal.adoptionAnimal?.adopter.name}
                        requestPhone={donation.donateAnimal.adoptionAnimal?.adopter.phone}
                        requestLocation={donation.donateAnimal.adoptionAnimal?.adopter.address}
                        onConfirmReceipt={() => {
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