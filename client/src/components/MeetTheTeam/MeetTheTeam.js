import React from 'react';
import { Card, CardDeck, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Claire Freeman",
      GitHub: "https://github.com/claire-max",
      photo: ""
    },
    {
      name: "Rima Das",
      GitHub: "https://github.com/rimadas9878",
      photo: ""
    },
    {
      name: "Prateek Verghese",
      GitHub: "https://github.com/iTeak",
      photo: ""
    },
    {
      name: "Santiago Campos",
      GitHub: "https://github.com/Everyone1138",
      photo: ""
    },
    {
      name: "Suzanne Banasihan",
      GitHub: "https://github.com/subie23",
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
              <CardText className="text-sm">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on GitHub</a>
              </CardText>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </div>

  );
}

export default MeetTheTeam;
