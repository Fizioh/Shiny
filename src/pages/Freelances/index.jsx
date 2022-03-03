import Card from '../../components/Card'
import styled from 'styled-components'

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

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 250px 250px;
    grid-template-columns: repeat(3, 1fr);
`

function Freelances() {
    return (
        <div>
            <h1>Voici les freelances : </h1>
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
