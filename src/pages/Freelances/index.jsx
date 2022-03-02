import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
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
            <h1>Voici les freelances : </h1>
            {freelanceProfiles.map((profile, index) => (
                <Card 
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    title={profile.name}
                    //picture={profile.picture}
                />
            ))}
        </div>
    )
}

export default Freelances
