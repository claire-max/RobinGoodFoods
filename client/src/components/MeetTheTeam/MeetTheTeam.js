import { Card, CardDeck, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Claire Freeman",
      GitHub: "",
      photo: ""
    },
    {
      name: "Rima Das",
      GitHub: "",
      photo: ""
    },
    {
      name: "Prateek Verghese",
      GitHub: "",
      photo: ""
    },
    {
      name: "Santiago Campos",
      GitHub: "",
      photo: ""
    },
    {
      name: "Suzanne Banasihan",
      GitHub: "",
      photo: ""
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-medium text-center">Meet the Team</h2>
      <CardDeck className="mx-auto">
        {teamMembers.slice(0,5).map(member => (
          <Card key={member.name} className="w-64 h-64 mx-4">
            <CardImg src={member.photo} alt={`${member.name}`} className="w-full h-48 object-cover"/>
            <CardBody className="px-4 py-2">
              <CardTitle className="text-lg font-medium">{member.name}</CardTitle>
              <CardText className="text-sm font-medium">{member.jobTitle}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </div>

  );
}

export default MeetTheTeam;
