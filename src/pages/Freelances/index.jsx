import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 250px 250px;
    grid-template-columns: repeat(3, 1fr);
`
const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function Freelances() {
    const [isFreeDataLoading, setFreeDataLoading] = useState(false)
    const [error, setError] = useState(false)
    const [freelancersList, setFreeData] = useState([])

    useEffect(() => {
        async function fetchFreelances() {
            setFreeDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const { freelancersList } = await response.json()
                setFreeData(freelancersList)
            } catch (err) {
                console.log('=== error ===', err)
                setError(true)
            } finally {
                setFreeDataLoading(false)
            }
        }
        fetchFreelances()
    }, [])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isFreeDataLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    ))}
                </CardsContainer>
            )}
        </div>
    )
}

export default Freelances
