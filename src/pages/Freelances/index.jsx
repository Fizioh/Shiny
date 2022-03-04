import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

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

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur front',
    },
    {
        name: 'Mr.Robot',
        jobTitle: 'Hacker',
    },
]


function Freelances() {
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunisssons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                        //picture={profile.picture}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances
