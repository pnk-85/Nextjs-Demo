
import { useRouter } from "next/router";


const AboutUs = () => {
  const router = useRouter();

  const teamId = router.query.teamId;

  const details = [

    { id: 1, name: 'Yash', role: 'Senior Developer' },

    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },

    { id: 3, name: 'Suresh', role: 'Frontend Developer' }

  ];

  const team = details.find((item) => item.id === Number(teamId));




  return (
    <div>
      {team && (
        <h1>
          {team.name} - {team.role}
        </h1>
      )}
      {!team && <h1>Developer doesn't exist</h1>}
    </div>
  )
}

export default AboutUs;